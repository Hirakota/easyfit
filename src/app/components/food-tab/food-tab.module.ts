import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {FoodTabComponent} from './food-tab.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [FoodTabComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    FoodTabComponent
  ]
})
export class FoodTabModule { }
