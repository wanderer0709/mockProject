import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User, Profile } from '../models';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'https://conduit.productionready.io/api';
  constructor( private http: HttpClient, 
    private authenticationService: AuthenticationService,
    private baseService: BaseService) {}

  handleError(error: any) {
    return throwError(error.error);
  }
  
  updateUser(user): Observable<User> {
    return this.http.put<any>(this.url + '/user', { user: user })
    .pipe(map(userData => {
      this.authenticationService.updateCurrentUserValue(userData.user);
      localStorage.setItem("currentUser", JSON.stringify(userData.user));
      return userData;
    }),catchError(this.handleError));
  }

  isAuthenticated(): boolean {
    const LoggedIn = localStorage.getItem('currentUser');
    if(LoggedIn){
      return true;
    }
    return false;
  }

  getUserProfile(userName: string) {
    return this.baseService.get('/profiles/' + userName);
  }
}
