import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from '../../app-routing.module';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
