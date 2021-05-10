import { Component, OnInit } from '@angular/core';
import {FoodList} from '../../entities/all.entites';
import {FormControl, FormGroup} from '@angular/forms';
interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-food-tab',
  templateUrl: './food-tab.component.html',
  styleUrls: ['./food-tab.component.scss']
})

export class FoodTabComponent implements OnInit {
  chooseForm = new FormGroup({
    type: new FormControl(),
    name: new FormControl(),
    weight: new FormControl(),
  });

  foodList: FoodList[] = [
    {
      type: 'Крупа',
      name: 'Рис',
      weight: 200,
      energyValue: 440
    }
  ];

  displayedColumns: string[] = ['type', 'name', 'weight', 'energyValue'];

  constructor() { }

  ngOnInit(): void {
  }

}
