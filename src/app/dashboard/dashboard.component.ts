import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  //get the click event of menu icon from topnav component and transfer it to sidebar component
  isSidebar = false;

  showSidebar() {
    this.isSidebar = !this.isSidebar;
  }


  constructor() { }

  ngOnInit() {
  }



  //   //topbar
  //   toggleMenu() {
  //     this.menuHidden = !this.menuHidden;
  //   }


  // //   sidebar
  //   isActive = false;
  //   showMenu = '';
  //   eventCalled() {
  //       this.isActive = !this.isActive;
  //   }
  //   addExpandClass(element: any) {
  //       if (element === this.showMenu) {
  //           this.showMenu = '0';
  //       } else {
  //           this.showMenu = element;
  //       }
  //   }






}
