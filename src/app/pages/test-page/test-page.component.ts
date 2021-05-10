import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  allFood = [
    {
      type: 'Крупа',
      list: [{name: 'Рис вареный', value: 200}, {name: 'Гречка', energyValue: 170}]
    },
    {
      type: 'Напитки',
      list: [{name: 'Кола', value: 440}, {name: 'Минералка', energyValue: 20}]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
