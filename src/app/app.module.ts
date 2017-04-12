import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { routing } from './app.router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guard/auth.guard'
import { UserService } from './services/user.service'
import { AuthenticationService } from './services/authentication.service';

import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule.forRoot()
  ],
  providers: [
    AuthGuard,
    UserService,
    AuthenticationService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
