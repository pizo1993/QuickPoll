import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {



  private usersUrl = 'http://localhost:8080/users';

  constructor(private http: Http) { }

    public getAll(): Promise<User[]> {

      return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json() as User[]);
  }

}
