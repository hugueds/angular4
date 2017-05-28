import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wagon-container',
  templateUrl: './wagon-container.component.html',
  styleUrls: ['./wagon-container.component.css']
})

export class WagonContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  boxes = [1,2,3,4,5,6];

 
}
