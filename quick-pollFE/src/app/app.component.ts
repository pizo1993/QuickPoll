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


  title = 'Quick Poll Application';
  polls: Poll[];


  constructor(private pollService: PollApiService) { }

  ngOnInit(): void {

    this.pollService.getPolls()
    .then(u => {
      let pollsObject = u;
      this.polls = new Array<Poll>;
      pollsObject.forEach((poll, i) => {
        this.polls[i]=new Poll(poll.id, poll.question, poll.options);
      });
    });





  }
}
