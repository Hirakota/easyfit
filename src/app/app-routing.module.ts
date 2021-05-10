import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestPageComponent} from './pages/test-page/test-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'test', component: TestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
