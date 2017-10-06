import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

import {SharedModule} from '../shared/shared.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginModule} from '../login/login.module';
import {SignupModule} from '../signup/signup.module';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    // NgbModule
    LoginModule,
    SignupModule,
   
  ],
  declarations: [
    DashboardComponent, 

  ]
})
export class DashboardModule { }
