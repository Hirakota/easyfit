import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from '../../app-routing.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
