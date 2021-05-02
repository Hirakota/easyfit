import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daily-ratio',
  templateUrl: './daily-ratio.component.html',
  styleUrls: ['./daily-ratio.component.scss'],
})
export class DailyRatioComponent implements OnInit {
  dailyTarget: number;

  dailyRationForm = new FormGroup({
    gender: new FormControl(),
    age: new FormControl(),
    height: new FormControl(),
    weight: new FormControl(),
    activity: new FormControl(),
  });
  onFormSubmit(): void {
    let sum: number;
    let bmr: number;
    let activeLvl: number;

    if (this.dailyRationForm.get('gender').value === 0) {
      bmr =
        10 * this.dailyRationForm.get('weight').value +
        6.25 * this.dailyRationForm.get('height').value -
        5 * this.dailyRationForm.get('age').value +
        5;
    } else {
      bmr =
        10 * this.dailyRationForm.get('weight').value +
        6.25 * this.dailyRationForm.get('height').value -
        5 * this.dailyRationForm.get('age').value -
        161;
    }

    switch (this.dailyRationForm.get('activity').value) {
      default:
        activeLvl = 1;
        break;
      case 1:
        activeLvl = 1.2;
        break;
      case 2:
        activeLvl = 1.375;
        break;
      case 3:
        activeLvl = 1.55;
        break;
      case 4:
        activeLvl = 1.725;
        break;
      case 5:
        activeLvl = 1.9;
        break;
    }

    sum = Math.round(bmr * activeLvl);
  }

  constructor() {}

  ngOnInit(): void {}
}
