import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import {
  Login,
  LoginSuccess,
  LoginFail,
  AuthActionTypes
} from './auth.actions';
import { AuthService } from '../services/auth/auth.service';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { User } from '../data-models/user';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    mergeMap((action: Login) =>
      this.authService.login(action.payload).pipe(
        map((user: User) => new LoginSuccess(user)),
        catchError(error => of(new LoginFail(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  navigateToProfile$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    map((action: LoginSuccess) => action.payload),
    tap(() => this.router.navigate([`/products`]))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
