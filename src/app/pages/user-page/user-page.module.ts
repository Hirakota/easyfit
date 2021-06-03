import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPageComponent} from './user-page.component';
import { UserComponent } from './user/user.component';
import { GraphComponent } from './graph/graph.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ChartModule} from 'angular-highcharts';
import {BrowserModule} from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [UserPageComponent, UserComponent, GraphComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    BrowserModule
  ],
  exports: [UserPageComponent]
})
export class UserPageModule { }
