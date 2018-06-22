import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../models/poll';

@Component({
  selector: 'app-poll-list,[app-poll-list]',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})

export class PollListComponent implements OnInit {

  @Input() poll: Poll;

  constructor() { }

  ngOnInit() {
  }

}
