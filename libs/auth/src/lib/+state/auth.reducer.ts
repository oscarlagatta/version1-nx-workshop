import { AuthAction, AuthActionTypes } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

/**
 * Interface for the 'Auth' data used in
 *  - AuthState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface AuthState {
  list: Entity[]; // list of Auth; analogous to a sql normalized table
  selectedId?: string | number; // which Auth record has been selected
  loaded: boolean; // has the Auth list been loaded
  error?: any; // last none error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  list: [],
  loaded: false
};

export function reducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionTypes.AuthLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
