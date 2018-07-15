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
    // Array di boolean, indice rappresentato dall'id di ciascun user, serve ad impostare per ciascun user la variabile booleana che abilita/disabilita la visualizzazione dei dettagli relativi all'utente rappresentato dalla chiave.
    showInfo: Map<number, boolean>;

  constructor(public authenticationService: AuthenticationService, public router: Router, public userService: UserService) {

  }


    ngOnInit() {
      this.currentUser = new User();
      Object.assign(this.currentUser, JSON.parse(localStorage.getItem('currentUser')));
      this.loadAllUsersFullname();
    }
/*
    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }
*/

    public changeShowInfo(id: number) {
      return this.showInfo[id] = !this.showInfo[id];
    }

    public infoLabel(bool: boolean) {
      return bool ? 'Nascondi Info' : 'MostraInfo';
    }

// Chiamata al servizio userService. Viene creato un oggetto di tipo User per ogni istanza restituita dalla chiamata al servizio. 
    private loadAllUsersFullname() {
      this.userService.getAll()
        .then(u => {
          const usersObject = u;
          this.showInfo = new Map<number, boolean>();
          usersObject.forEach((user, i) => {
          this.users[i] = new User();
          Object.assign(this.users[i], user);
          this.showInfo.set(this.users[i].id, false);
          });
          
        });
    }


    logOut() {
    console.log('Logout in corso');
    if (this.authenticationService.logOut()) {
          this.router.navigate(['/login']);
    } else {
      console.log('ERRORE');
    }
  }

}
