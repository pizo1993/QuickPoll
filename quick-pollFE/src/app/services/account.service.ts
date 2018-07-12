import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {

  private registerUrl = 'http://localhost:8080/register';

  constructor(public http: Http) { }

  createAccount(user:User){
    return this.http.post(this.registerUrl,user)
      .map(resp=>resp.json());
  }
}
