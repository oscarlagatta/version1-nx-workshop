import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authenticate } from '../../data-models/authenticate';
import { Observable } from 'rxjs';
import { User } from '../../data-models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>(
      'http://localhost:3000/login',
      authenticate
    );
  }
}
