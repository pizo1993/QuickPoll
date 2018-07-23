import { AppComponent } from '../app.component';
import { Poll } from '../models/poll';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PollApiService {


  constructor(private http: HttpClient) { }

    public getPolls(): Observable<Poll[]> {
      return this.http.get<Poll[]>(AppComponent.API_URL + '/polls')
        .map(response => response as Poll[]);
  }

  public getPollsByUserId(userId: number): Observable<Poll[]> {
    const options = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'X-Auth': JSON.parse(localStorage.getItem('token'))
       }),
      params: new HttpParams().append('idUser', userId.toString())
    };
    return this.http.get(AppComponent.API_URL + '/polls', options)
    .map(response => response as Poll[]);
  }

}
