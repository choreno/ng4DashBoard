import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})

export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Output() sidebarStatus : EventEmitter<boolean> = new EventEmitter<boolean>();
  
  brand: string = 'ngZonMony'
  isSidebar: boolean = false; 

  toggleSidebar()
  {
    this.sidebarStatus.emit(!this.isSidebar);
  }


}
