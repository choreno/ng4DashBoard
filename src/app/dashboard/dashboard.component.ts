import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  hasSidebar: boolean = true;

  public isCollapsed = false;

  model = {
    left: true,
    middle: false,
    right: false
  };
  
  constructor() { }

  ngOnInit() {
  }


  isActive = false;
  showMenu = '';
  eventCalled() {
      this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
  }


  
}
