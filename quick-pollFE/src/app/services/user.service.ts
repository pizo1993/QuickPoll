import { AppComponent } from '../app.component';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  //private usersUrl = 'http://localhost:8080/users';


  constructor(private http: Http) { }


    public getAll(): Promise<User[]> {
    // creating base64 encoded String from user name and password
    //var base64Credential: string = btoa( user.username+ ':' + user.password);
    let headers = new Headers({
     'Content-Type': 'application/json',
     'X-Auth': JSON.parse(localStorage.getItem('token'))
     });
//
    let options = new RequestOptions();
    options.headers=headers;
      return this.http.get(AppComponent.API_URL + '/users', options)
            .toPromise()
            .then(response => response.json() as User[]);
  }


  public getUserById(id: number): Promise<User> {
    let headers = new Headers({
     'Content-Type': 'application/json',
     'X-Auth': JSON.parse(localStorage.getItem('token'))
     });
//
    let options = new RequestOptions();
    options.headers=headers;
      return this.http.get(AppComponent.API_URL + '/users/'+id, options)
            .toPromise()
            .then(response => response.json() as User[]);
  }

}
