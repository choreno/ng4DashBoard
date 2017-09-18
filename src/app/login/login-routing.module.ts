import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from "@angular/router";

import {LoginComponent} from './login.component';

const routes: Routes = [
  
   { path: '', component: LoginComponent }
  //  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  //  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
 ]
 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [LoginComponent]
})
export class LoginRoutingModule { }
