import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bai24-input',
  templateUrl: './bai24-input.component.html',
  styleUrls: ['./bai24-input.component.css']
})
export class Bai24InputComponent implements OnInit {
  @Input() name;
  @Input() age;
  constructor() { }

  ngOnInit() {
  }

}
