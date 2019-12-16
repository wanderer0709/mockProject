import { Injectable } from '@angular/core';
import {  map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';
import { Article } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

constructor( private http: HttpClient, private baseService: BaseService ) {}

getGlobalArticles() {
  let params = { limit: 500 };
  return this.baseService.get('/articles', params);
}

getFeedArticles() {
  return this.baseService.get('/articles/feed');
}

favorite(slug): Observable<Article> {
  return this.baseService.post('/articles/' + slug + '/favorite');
}

unfavortie(slug): Observable<Article> {
  return this.baseService.delete('/articles/' + slug + '/favorite');
}

getAuthorArticle(userName) {
  let params = {
    author: userName
  };
  return this.baseService.get('/articles', params);
}

getFavoriteArticle(userName) {
 let params = {
  favorited: userName
 };
 return this.baseService.get('/articles', params);
}

}
