import {createAction, props} from '@ngrx/store';
import {Todo, TodoSearchResult} from './todo';

export const search = createAction('[Todo] Suchen');
export const resultsLoaded = createAction('[Todo API] Suchresultat geladen', props<{ results: TodoSearchResult[] }>());

/*export const getDetail = createAction('[Todo] Todo laden', props<{ id: number }>());
export const detailLoaded = createAction('[Todo API] Todo geladen', props<{ detail: Todo }>());*/
