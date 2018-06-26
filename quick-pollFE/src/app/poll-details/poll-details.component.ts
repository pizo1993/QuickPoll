import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll-details, [app-poll-list]',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {
  @Input() options: Option[];
  voteSelected: Vote;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      options: [false, Validators.required],
    });

  }

  public sendVote(): void {
    if (this.form.invalid) {
      alert("ERRORE; SELEZIONARE UN VOTO");
      return;
    }
    alert("Voto selezionato: " + this.voteSelected.value);
  }

  public showResult(): void {
    alert("Voti");
  }

}
