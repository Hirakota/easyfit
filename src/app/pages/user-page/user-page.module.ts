import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPageComponent} from './user-page.component';
import { UserComponent } from './user/user.component';
import { GraphComponent } from './graph/graph.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ChartModule} from 'angular-highcharts';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [UserPageComponent, UserComponent, GraphComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ChartModule,
    BrowserModule
  ],
  exports: [UserPageComponent]
})
export class UserPageModule { }
