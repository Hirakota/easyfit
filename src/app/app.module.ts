import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './shared/header/header.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import {TestPageModule} from './pages/test-page/test-page.module';
import {MainPageModule} from './pages/main-page/main-page.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserPageComponent } from './pages/user-page/user-page.component';
import {UserPageModule} from './pages/user-page/user-page.module';
import { BurnCalcComponent } from './components/burn-calc/burn-calc.component';
import {BurnCalcModule} from './components/burn-calc/burn-calc.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    TestPageModule,
    MainPageModule,
    UserPageModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
