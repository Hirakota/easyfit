import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DailyPlanComponent} from './daily-plan.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [DailyPlanComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [DailyPlanComponent]
})
export class DailyPlanModule { }
