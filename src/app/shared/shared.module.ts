import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//for routing at sidebar component
import { Routes, RouterModule } from '@angular/router';

import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopnavComponent, 
    SidebarComponent
  ],
  exports: [TopnavComponent,SidebarComponent]
})
export class SharedModule { }
