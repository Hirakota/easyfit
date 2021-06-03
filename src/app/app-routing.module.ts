import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestPageComponent} from './pages/test-page/test-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {BurnPageComponent} from "./pages/burn-page/burn-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'burn', component: BurnPageComponent},
  {path: 'test', component: TestPageComponent},
  {path: 'statistics', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
