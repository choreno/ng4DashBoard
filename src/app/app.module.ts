import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';

import {LoginModule} from './login/login.module';
import {SignupModule} from './signup/signup.module';
import {DashboardModule} from './dashboard/dashboard.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    DashboardModule,
    NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
