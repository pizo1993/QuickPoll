import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user: User=new User();
  errorMessage:string;
  constructor(private authenticationService :AuthenticationService, private router: Router) { }



  ngOnInit() {
  }

  login(){
    this.authenticationService.logIn(this.user)
      .subscribe(data=>{
        this.router.navigate(['/profile']);
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }
}
