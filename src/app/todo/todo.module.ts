import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodoSearchContainer} from './todo-search.container';
import {TodoRoutingModule} from './todo-routing-module';
import {StoreModule} from '@ngrx/store';
import * as fromTodo from './todo.reducer';
import {TodoEffects} from './todo.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    TodoSearchContainer
  ],
  imports: [
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ]
})
export class TodoModule { }
