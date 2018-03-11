import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai25-ngforkethopinput',
  templateUrl: './bai25-ngforkethopinput.component.html',
  styleUrls: ['./bai25-ngforkethopinput.component.css']
})
export class Bai25NgforkethopinputComponent implements OnInit {
  arrpeople = [
    {name: 'tí', age: 25},
    {name: 'tủm', age:24},
    {name: 'tửng',age:23}
  ];
  constructor() { }

  ngOnInit() {
  }

}
