import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Profile } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private baseService: BaseService) { }

  getUserProfile(userName: string): Observable<Profile> {
    return this.baseService.get('/profiles/' + userName);
  }

  follow(userName: string): Observable<Profile> {
    return this.baseService.post('/profiles/' + userName + '/follow');
  }

  unfollow(userName: string): Observable<Profile> {
    return this.baseService.delete('/profiles/' + userName + '/follow');
  }
}
