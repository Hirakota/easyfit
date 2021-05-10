import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FoodList} from '../../entities/all.entites';
import {FormControl, FormGroup} from '@angular/forms';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-food-tab',
  templateUrl: './food-tab.component.html',
  styleUrls: ['./food-tab.component.scss'],
})

export class FoodTabComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table: MatTable<any>;

  buttonIsDisalbed: [boolean, boolean] = [true, true];

  @Input() allFood: any;

  chooseForm = new FormGroup({
    type: new FormControl(),
    name: new FormControl({value: '', disabled: true}),
    weight: new FormControl({value: '', disabled: true}),
  });

  foodList: FoodList[] = [
    {
      type: 'Напитки',
      name: 'Молоко',
      weight: 300,
      energyValue: 150
    }
  ];

  displayedColumns: string[] = ['type', 'name', 'weight', 'energyValue'];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.foodList.length) {
      this.buttonIsDisalbed[0] = false;
    }

    this.chooseForm.controls['type'].valueChanges.subscribe((value) => {
      if (value) {
          this.chooseForm.controls['name'].enable();
      } else {
          this.chooseForm.controls['name'].disable();
      }
    });
    this.chooseForm.controls['name'].valueChanges.subscribe((value) => {
      if (value) {
        this.chooseForm.controls['weight'].enable();
      } else {
        this.chooseForm.controls['weight'].disable();
      }
    });
    this.chooseForm.controls['weight'].valueChanges.subscribe((value) => {
      if (value) {
        this.buttonIsDisalbed[1] = false;
      } else {
        this.buttonIsDisalbed[1] = true;
      }
    });
  }

  ngOnDestroy(): void {
  }

  addToList(): void {
    this.foodList.push(
      {
        type: this.chooseForm.controls['type'].value?.type,
        name: this.chooseForm.controls['name'].value?.name,
        weight: this.chooseForm.controls['weight'].value,
        energyValue: (this.chooseForm.controls['weight'].value / 100) * this.chooseForm.controls['name'].value?.energyValue
      }
    );

    this.buttonIsDisalbed[0] = false;
    this.table.renderRows();
    this.chooseForm.reset();
  }
  removeFromList(row: FoodList): void {
    this.foodList.splice(this.foodList.indexOf(row), 1);

    if(!this.foodList.length) {
      this.buttonIsDisalbed[0] = true;
    }

    this.table.renderRows();
  }
}
