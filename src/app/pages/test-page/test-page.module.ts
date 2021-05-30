import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestPageComponent} from './test-page.component';
import {DailyPlanModule} from '../../components/daily-plan/daily-plan.module';
import {FoodTabModule} from '../../components/food-tab/food-tab.module';
import {DailyRatioModule} from '../../components/daily-ratio/daily-ratio.module';
import {BurnCalcModule} from '../../components/burn-calc/burn-calc.module';



@NgModule({
  declarations: [TestPageComponent],
  imports: [
    CommonModule,
    DailyPlanModule,
    DailyRatioModule,
    FoodTabModule,
    BurnCalcModule
  ],
  exports: [TestPageComponent]
})
export class TestPageModule { }
