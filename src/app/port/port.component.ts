import { Component, OnInit } from '@angular/core';
import { pages } from '../port/pages'
@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss']
})
export class PortComponent implements OnInit {
  pages = pages;
// tslint:disable-next-line: prefer-const
/*    dict = {
    page1:{
      title:'calculator',
      img:'../../assets/images/calc.png',
      desc:'Simple calculator app made with vanilla JS HTML and SCSS',
      url:'https://stormnotes.github.io/calcu/'
    },
    page2:{
      title:'calculator',
      desc:'Simple calculator app made with vanilla JS HTML and SCSS',
      url:'https://stormnotes.github.io/calcu/'
    }
  }; */

constructor() {

   }

ngOnInit() {
  }

}
