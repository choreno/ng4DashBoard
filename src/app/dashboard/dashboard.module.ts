import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {TopnavComponent} from '../shared/topnav/topnav.component';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';     

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent, 
    TopnavComponent,
    SidebarComponent
  ]
})
export class DashboardModule { }
