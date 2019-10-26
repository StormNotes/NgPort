import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  clickCounter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onRemoval() {
    this.clickCounter --;
    console.log(this.clickCounter);
  }

  onAdd() {
    this.clickCounter ++;
    console.log(this.clickCounter);
  }
  onClear() {
    this.clickCounter = 0;
    console.log(this.clickCounter);
  }

}
