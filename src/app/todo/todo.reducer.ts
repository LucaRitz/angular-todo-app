import {Action, createReducer, on} from '@ngrx/store';
import * as Actions from './todo.actions';
import {Todo, TodoSearchResult} from './todo';

export const todoFeatureKey = 'todo';

export interface TodoState {
  results: TodoSearchResult[];
  detail: Todo;
}

export const initialState: TodoState = {
  results: [],
  detail: undefined,
};

const todoReducer = createReducer(
  initialState,
  on(Actions.search, (state) => {
    return {
      ...state,
      results: initialState.results
    };
  }),
  on(Actions.resultsLoaded, (state, {results}) => {
    return {
      ...state,
      results
    };
  }),
);

export function reducer(state: TodoState | undefined, action: Action): TodoState {
  return todoReducer(state, action);
}
