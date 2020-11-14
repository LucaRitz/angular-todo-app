import {createFeatureSelector, createSelector} from '@ngrx/store';
import {todoFeatureKey, TodoState} from './todo.reducer';

export const feature = createFeatureSelector<TodoState>(todoFeatureKey);

export const selectResults = createSelector(feature, state => state.results);
export const selectDetail = createSelector(feature, state => state.detail);
