import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PollApiService } from './services/poll-api.service'
import { AlertService} from './services/alert.service';
import { AuthenticationService} from './services/authentication.service';
import { UserService} from './services/user.service';
import { JwtInterceptor} from './helpers/Jwt.interceptor';
import { ErrorInterceptor} from './helpers/error.interceptor';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { AuthGuard } from './guard/auth.guard';
import { PollListComponent } from './poll-list/poll-list.component';
import { PollDetailsComponent } from './poll-details/poll-details.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PollListComponent,
    PollDetailsComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    PollApiService,
    FormBuilder,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
