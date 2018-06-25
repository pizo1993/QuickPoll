import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll-details, [app-poll-list]',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {
  @Input() options: Option[];


  constructor() { }

  ngOnInit() {
  }

  public vote(): void {
    alert("Grazie per il voto");
  }

  public showResult(): void {
    alert("Voti");
  }

}
