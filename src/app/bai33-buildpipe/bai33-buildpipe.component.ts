import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai33-buildpipe',
  templateUrl: './bai33-buildpipe.component.html',
  styleUrls: ['./bai33-buildpipe.component.css']
})
export class Bai33BuildpipeComponent implements OnInit {
  birthday = new Date();
  person = {name: 'phan', age : 26};
  address = Promise.resolve('123 pham huy thong');
  constructor() { }

  ngOnInit() {
  }

}
