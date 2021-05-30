import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BurnPageComponent} from "./burn-page.component";
import {BurnCalcModule} from "../../components/burn-calc/burn-calc.module";


@NgModule({
  declarations: [BurnPageComponent],
  imports: [
    CommonModule,
    BurnCalcModule
  ],
  exports: [BurnPageComponent]
})
export class BurnPageModule {
}
