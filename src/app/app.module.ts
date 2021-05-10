import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyRatioModule } from './components/daily-ratio/daily-ratio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderModule} from './shared/header/header.module';
import { FoodTabComponent } from './components/food-tab/food-tab.component';
import {FoodTabModule} from './components/food-tab/food-tab.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DailyRatioModule,
    BrowserAnimationsModule,
    HeaderModule,
    FoodTabModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
