import {createAction, props} from '@ngrx/store';
import {User} from './login';

export const login = createAction('[Login] Login', props<{user: User}>());
export const register = createAction('[Login] Login', props<{user: User}>());

export const empty = createAction('[Login] No op action');
