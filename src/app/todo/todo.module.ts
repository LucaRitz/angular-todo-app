import {NgModule} from '@angular/core';
import {TodoSearchContainer} from './todo-search.container';
import {TodoRoutingModule} from './todo-routing-module';
import {StoreModule} from '@ngrx/store';
import * as fromTodo from './todo.reducer';
import {TodoEffects} from './todo.effects';
import {EffectsModule} from '@ngrx/effects';
import {TodoSearchResultsComponent} from './todo-search-results.component';
import {MatCardModule} from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {TodoSearchResultComponent} from './todo-search-result.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {TodoDetailComponent} from './todo-detail.component';
import {TodoDetailContainer} from './todo-detail.container';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    TodoSearchContainer,
    TodoSearchResultsComponent,
    TodoSearchResultComponent,
    TodoDetailContainer,
    TodoDetailComponent
  ],
  imports: [
    SharedModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
    MatCardModule,
    TranslateModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ]
})
export class TodoModule {
}
