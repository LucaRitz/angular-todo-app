import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoSearchContainer} from './todo-search.container';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  { path: 'search', component: TodoSearchContainer },
  // { path: 'detail/:id', component: DetailContainer },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
