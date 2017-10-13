import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { ChartsComponent } from './charts/charts.component';
import { BillComponent } from './bill/bill.component';

const dashboardRoutes: Routes = [

  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'bill', component: BillComponent },
      { path: 'charts', component: ChartsComponent },
    ]
  },

  //intial route and not found route
  { path: '', redirectTo: 'dashboard/main', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard/main', pathMatch: 'full' }

];



@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
