import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {DailyPlanModule} from "../../components/daily-plan/daily-plan.module";
import {FoodTabModule} from "../../components/food-tab/food-tab.module";
import {MatIconModule} from "@angular/material/icon";
import {DailyRatioModule} from "../../components/daily-ratio/daily-ratio.module";



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    DailyPlanModule,
    FoodTabModule,
    MatIconModule,
    DailyRatioModule
  ],
  exports: [MainPageComponent]
})
export class MainPageModule { }
