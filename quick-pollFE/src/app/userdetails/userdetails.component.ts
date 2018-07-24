import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { Poll } from '../models/poll';
import { PollApiService } from '../services/poll-api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userId: number;
  private sub: any;
  user: User;
  pollList: Poll[];

  constructor(public route: ActivatedRoute, public userService: UserService, public pollApiService: PollApiService) { }

  ngOnInit() {

    this.user= new User();
    

    this.sub = this.route.params.subscribe(p => {
      this.userId = p['id'];
      this.getUserById();
      this.getPollsByUserId();
     });
  }
  
   private getUserById() {
    this.userService.getUserById(this.userId).then(u => {
      Object.assign(this.user, u);
    });
  }


  private getPollsByUserId() {
    this.pollApiService.getPollsByUserId(this.userId).subscribe(polls => {
      let pollListJson = polls;
      pollListJson.forEach((p, i) => {
        this.pollList[i] = new Poll();
        Object.assign(this.pollList[i], p);
      })
      console.log("Sondaggi: " + this.pollList);
    })
  }
 

}
