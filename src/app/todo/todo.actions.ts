import {createAction, props} from '@ngrx/store';
import {Todo, TodoSearchResult} from './todo';

export const search = createAction('[Todo] Suchen');
export const resultsLoaded = createAction('[Todo API] Suchresultat geladen', props<{ results: TodoSearchResult[] }>());

export const getDetail = createAction('[Todo] Todo laden', props<{ id: string }>());
export const detailLoaded = createAction('[Todo API] Todo geladen', props<{ detail: Todo }>());

export const saveDetail = createAction('[Todo] Speichern', props<{ detail: Todo }>());
export const detailSaved = createAction('[Todo API] Todo gespeichert', props<{ detail: Todo }>());
export const deleteDetail = createAction('[Todo] Löschen', props<{ id: string }>());
export const detailDeleted = createAction('[Todo API] Todo gelöscht');
