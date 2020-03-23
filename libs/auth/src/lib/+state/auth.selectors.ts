import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY } from './auth.reducer';
import { AuthData } from './auth.models';

// Lookup the 'Auth' feature state managed by NgRx
const getAuthState = createFeatureSelector<AuthData>(AUTH_FEATURE_KEY);

const getUser = createSelector(
  getAuthState,
  state => state.user
);

export const authQuery = {
  getUser
};
