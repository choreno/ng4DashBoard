import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private now: Date; 




  constructor() {

    this.now = new Date(); 
    setInterval( () => {
      this.now = new Date();
    }, 1000); 

   }

  ngOnInit() {
  }



}
