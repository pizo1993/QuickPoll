import { Component, OnInit, Input } from '@angular/core';
import { Poll } from './models/poll';
import { PollApiService } from './services/poll-api.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  title = 'Applicazione con Spring Boot Angular';
  polls: Poll[];

  constructor(private pollService: PollApiService) { }

  ngOnInit(): void {


    this.pollService.getPolls()
    .then(u => {
      this.polls = u;
    });

  }
}
