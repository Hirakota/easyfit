import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyRatioComponent } from './daily-ratio.component';

@NgModule({
  declarations: [DailyRatioComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DailyRatioComponent],
})
export class DailyRatioModule {}
