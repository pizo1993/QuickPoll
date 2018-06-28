import { Poll } from '../models/poll';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PollApiService {

  private pollApiUrl = 'http://localhost:8080/polls';

  constructor(private http: Http) { }

    public getPolls(): Promise<Poll[]> {

      return this.http.get(this.pollApiUrl)
            .toPromise()
            .then(response => response.json() as Poll[]);

  }
}
