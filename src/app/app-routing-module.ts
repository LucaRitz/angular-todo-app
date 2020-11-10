import {NgModule} from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';
import {AppGuard} from './app.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule',
    canActivate: [AppGuard]
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading,
    enableTracing: false // <-- debugging purposes only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
