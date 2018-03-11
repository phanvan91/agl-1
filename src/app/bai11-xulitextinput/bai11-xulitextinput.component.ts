import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai11-xulitextinput',
  templateUrl: './bai11-xulitextinput.component.html',
  styleUrls: ['./bai11-xulitextinput.component.css']
})
export class Bai11XulitextinputComponent implements OnInit {
  name;
  constructor() { }

  ngOnInit() {
  }
  showevent(ev){
    // console.log(ev);
    this.name = ev.target.value;
  }
}
