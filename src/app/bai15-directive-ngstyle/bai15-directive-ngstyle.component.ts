import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai15-directive-ngstyle',
  templateUrl: './bai15-directive-ngstyle.component.html',
  styleUrls: ['./bai15-directive-ngstyle.component.css']
})
export class Bai15DirectiveNgstyleComponent implements OnInit {
  name = '';
  isHeight = true;
  eventstyle = {color : 'blue',fontSize : '300%'};
  oldstyle = {color: 'green' , fontSize: '100%'};
  curent = { circle : this.isHeight, square : !this.isHeight };
  constructor() { }

  ngOnInit() {
  }

}
