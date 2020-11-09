import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginContainer} from './login.container';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'detail',
    pathMatch: 'full'
  },
  { path: 'detail', component: LoginContainer },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
