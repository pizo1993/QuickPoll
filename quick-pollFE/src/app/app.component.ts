import { Component, OnInit, Input } from '@angular/core';
import { Poll } from './models/poll';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  static API_URL = 'http://localhost:8080';
  title = 'Quick Poll Application';
  polls: Poll[];
  constructor() { }


  ngOnInit(): void {
    //localStorage.clear();
  }


}
