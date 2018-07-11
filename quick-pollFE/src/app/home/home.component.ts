import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];


  constructor(public authenticationService: AuthenticationService, public router: Router, public userService: UserService) {
    
  }


    ngOnInit() {
      this.currentUser = new User();
      Object.assign(this.currentUser,JSON.parse(localStorage.getItem('currentUser')));
      this.loadAllUsers();
    }
/*
    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }
*/  
  
     // login out from the app
  
  logOut() {
    console.log("Logout in corso")
    if (this.authenticationService.logOut()) {
          this.router.navigate(['/login']);
    } else {
      console.log("ERRORE");
    }
      
  }
  
  
  
    private loadAllUsers() {
      this.userService.getAll()
        .then(u => {
          let usersObject = u;   
          usersObject.forEach((user, i) => {
          this.users[i]=new User();
          this.users[i] = user;
          });
        });
    }
}
