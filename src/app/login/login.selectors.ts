import {createFeatureSelector, createSelector} from '@ngrx/store';
import {loginFeatureKey, UserState} from './login.reducer';

export const feature = createFeatureSelector<UserState>(loginFeatureKey);

export const selectUser = createSelector(feature, state => state.user);
