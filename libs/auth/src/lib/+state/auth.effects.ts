import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth/auth.service';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { User } from '../data-models/user';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(action =>
        this.authService.login(action.authenticate).pipe(
          map((user: User) => {
            console.log('user', user);
            return AuthActions.loginSuccess({ user });
          }),
          catchError(error => of(AuthActions.loginFail({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  navigateToProfile$ = this.actions$.pipe(
    ofType(AuthActions.loginSuccess),
    map(action => action.user),
    tap(() => this.router.navigate([`/products`]))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
