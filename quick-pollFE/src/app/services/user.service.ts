import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/users';
  
  
  constructor(private http: Http) { }
    
    
    public getAll(): Promise<User[]> {
      
    /* let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa( user.username+ ':' + user.password);
    headers.append("Authorization", "Basic " + base64Credential);
//
    let options = new RequestOptions();
    options.headers=headers;*/      
    
      return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json() as User[]);
  }

}
