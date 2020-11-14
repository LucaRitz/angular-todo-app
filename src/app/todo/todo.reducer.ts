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
  on(Actions.getDetail, (state) => {
    return {
      ...state,
      detail: initialState.detail
    };
  }),
  on(Actions.detailLoaded, (state, {detail}) => {
    return {
      ...state,
      detail
    };
  }),
  on(Actions.saveDetail, (state, {detail}) => {
    return {
      ...state,
      detail
    };
  }),
  on(Actions.detailSaved, (state, {detail}) => {
    return {
      ...state,
      detail
    };
  }),
  on(Actions.detailDeleted, (state) => {
    return {
      ...state,
      detail: initialState.detail
    };
  }),
);

export function reducer(state: TodoState | undefined, action: Action): TodoState {
  return todoReducer(state, action);
}
