import { Injectable } from '@angular/core';
import {  map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = 'https://conduit.productionready.io/api';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  handleError(error: any) {
    return throwError(error.error);
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  updateCurrentUserValue(userData) {
    this.currentUserSubject.next(userData);
  }


  logIn(userData, authType): Observable<User> {
    const route = (authType === 'login') ? '/login' : '';
    return this.http.post<any>(this.url + '/users' + route, { user: userData })
      .pipe(map(data => {
        if (data && data.user.token) {
          localStorage.setItem('currentUser', JSON.stringify(data.user));//save JWTtoken from server
          this.currentUserSubject.next(data.user)
        }
        return data;
      }), catchError(this.handleError));

  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
