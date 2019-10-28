import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss']
})
export class PortComponent implements OnInit {

  pages = {
    page1: {
      title: 'calculator',
      url: '#'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
