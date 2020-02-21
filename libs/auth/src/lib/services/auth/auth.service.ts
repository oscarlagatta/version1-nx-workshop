import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authenticate } from '../../data-models/authenticate';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../../data-models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(tap((user: User) => this.userSubject$.next(user)));
  }
}
