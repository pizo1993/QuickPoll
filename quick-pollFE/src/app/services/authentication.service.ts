import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import {User} from '../models/user';
import 'rxjs/add/operator/map';
import {AppComponent} from '../app.component';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthenticationService {
 
  constructor(public http: HttpClient) {}

  public logIn(user: User){
    return this.http.post(AppComponent.API_URL + '/login', {
        'username': user.username,
        'password': user.password
    }, {
        headers: new HttpHeaders()
            .set('Content-Type', 'application/json'),
        observe: 'response'
    })
   .map((res) => { 
     let token=res.headers.get('X-Auth');
     if (token) {
       localStorage.setItem('token', JSON.stringify(token));
       localStorage.setItem('currentUser', JSON.stringify(res.body));
     }
    });
}
  
  public logOut() {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      return true;
    } catch (e) {
      console.log("ERRORE: " + e);
      return false;
    }
  }
}