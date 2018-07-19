import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userId: number;

  constructor(public route: ActivatedRoute, public userService: UserService) { }

  ngOnInit() {
    this.userId=this.route.params._value['id'];
    this.userService.getUserById(this.userId).then(u=>{
      console.log(u);
    })

  }

}
