import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai17-ngfor',
  templateUrl: './bai17-ngfor.component.html',
  styleUrls: ['./bai17-ngfor.component.css']
})
export class Bai17NgforComponent implements OnInit {
  arr = ['angular','js','react'];
  constructor() { }

  ngOnInit() {
  }

}
