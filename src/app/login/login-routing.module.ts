import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import {LoginComponent} from './login.component';

const ROUTES: Routes = [

 ]
 

@NgModule({
  imports: [ RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
