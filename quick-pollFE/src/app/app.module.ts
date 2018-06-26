import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PollApiService } from './services/poll-api.service'
import { AppComponent } from './app.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { PollDetailsComponent } from './poll-details/poll-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PollListComponent,
    PollDetailsComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,ReactiveFormsModule
  ],
  providers: [PollApiService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
