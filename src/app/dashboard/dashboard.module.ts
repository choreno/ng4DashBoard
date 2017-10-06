import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

import {SharedModule} from '../shared/shared.module';
import { ChartsComponent } from './charts/charts.component';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,

  ],
  declarations: [
    DashboardComponent,
    ChartsComponent, 

  ]
})
export class DashboardModule { }
