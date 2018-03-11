import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai58-contact',
  templateUrl: './bai58-contact.component.html',
  styleUrls: ['./bai58-contact.component.css']
})
export class Bai58ContactComponent implements OnInit {
  contact = [
    { id: 1, name: 'Teo', phoneNumber: '0123' },
    { id: 2, name: 'Ti', phoneNumber: '0456' },
    { id: 3, name: 'Tun', phoneNumber: '0789' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
