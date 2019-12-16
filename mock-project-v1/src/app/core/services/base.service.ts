import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl: string = 'https://conduit.productionready.io/api';

  constructor( private http: HttpClient) { }

  private handleErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, param = {}): Observable<any> {
    return this.http.get(this.baseUrl + path, { params: param })
      .pipe(catchError(this.handleErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      this.baseUrl + path,
      JSON.stringify(body)
    ).pipe(catchError(this.handleErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      this.baseUrl + path,
      JSON.stringify(body)
    ).pipe(catchError(this.handleErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      this.baseUrl + path
    ).pipe(catchError(this.handleErrors));
  }
}
