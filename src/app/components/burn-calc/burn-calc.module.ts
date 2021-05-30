import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BurnCalcComponent} from './burn-calc.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [BurnCalcComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [BurnCalcComponent]
})
export class BurnCalcModule { }
