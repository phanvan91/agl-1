import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  name;
  constructor() { }

  ngOnInit() {
  }
  // showevent(event){
  //   console.log(event);
  //   this.name = event.target.value;
  // }
}
