import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
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
  user: Promise<User>;

  constructor(public route: ActivatedRoute, public userService: UserService, public pollApiService: PollApiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(p => {
      this.userId = p['id'];
     });
    this.userService.getUserById(this.userId).then(u => {
      console.log(u);
    })
    
    this.pollApiService.getPollsByUserId(this.userId).subscribe(p => {
      console.log("CIAO");
      console.log(p);
    })
    //console.log(this.user);


  }

}
