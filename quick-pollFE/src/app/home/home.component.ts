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
    showDetails: boolean[] = [];
    

  constructor(public authenticationService: AuthenticationService, public router: Router, public userService: UserService) {
    
  }


    ngOnInit() {
      this.currentUser = new User();
      Object.assign(this.currentUser,JSON.parse(localStorage.getItem('currentUser')));
      this.loadAllUsersFullname();
    }
/*
    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }
*/  
  
    public changeShowDetails(id: number) {
      return this.showDetails[id] =!this.showDetails[id];
    }
  
    public detailsLabel(bool: boolean) {
      return bool ? 'Nascondi Dettagli' : 'Visualizza Dettagli';
    }
  
  
  
    private loadAllUsersFullname() {
      this.userService.getAll()
        .then(u => {
          let usersObject = u;   
          usersObject.forEach((user, i) => {
          this.users[i]= new User();
          Object.assign(this.users[i], user)     
          this.showDetails[user.id]=false;
          });
        });
    }
  
  
    logOut() {
    console.log("Logout in corso")
    if (this.authenticationService.logOut()) {
          this.router.navigate(['/login']);
    } else {
      console.log("ERRORE");
    }     
  }
  
}
