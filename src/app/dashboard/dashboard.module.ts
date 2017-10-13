import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { ChartsComponent } from './charts/charts.component';
import { MainComponent } from './main/main.component';

import { ChartsModule } from 'ng2-charts';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ExpenseDb } from '../data-access/expense.db';
import { ExpenseService } from '../service/expense.service';
import { HttpModule } from '@angular/http';
import { BillComponent } from './bill/bill.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ChartsModule,
    InMemoryWebApiModule.forRoot(ExpenseDb),
    HttpModule
  ],
  declarations: [
    DashboardComponent,
    ChartsComponent,
    MainComponent,
    BillComponent,

  ],
  providers: [ExpenseService]
})
export class DashboardModule { }
