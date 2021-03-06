import {createAction, props} from '@ngrx/store';
import {Todo, TodoSearchResult} from './todo';

export const search = createAction('[Todo] Suchen');
export const resultsLoaded = createAction('[Todo API] Suchresultat geladen', props<{ results: TodoSearchResult[] }>());

export const getDetail = createAction('[Todo] Todo laden', props<{ id: string }>());
export const detailLoaded = createAction('[Todo API] Todo geladen', props<{ detail: Todo }>());

export const completeTodo = createAction('[Todo] Speichern Liste', props<{ item: {id: string, completed: boolean} }>());
export const completed = createAction('[Todo API] Abgeschlossen gesetzt');
export const saveDetail = createAction('[Todo] Speichern', props<{ detail: Todo }>());
export const detailSaved = createAction('[Todo API] Todo gespeichert', props<{ detail: Todo }>());
export const deleteDetail = createAction('[Todo] Löschen', props<{ id: string }>());
export const detailDeleted = createAction('[Todo API] Todo gelöscht');

export const deleteRow = createAction('[Todo] Todo-Zeile Löschen', props<{ id: string }>());
export const rowDeleted = createAction('[Todo API] Todo-Zeile gelöscht');

export const setImportant = createAction('[Todo] Wichtigkeit setzen', props<{ detail: Todo, important: boolean }>());
export const importantSet = createAction('[Todo API] Wichtigkeit gesetzt');
