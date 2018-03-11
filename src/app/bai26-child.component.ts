import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` <button (click)="addfor()">Add</button>
              <button (click)="subfor()">sub</button>
  `
})

export class ChildComponent {
  @Output() myclick = new EventEmitter<boolean>() ;
  addfor() {
    this.myclick.emit(true);
  }
  subfor(){
    this.myclick.emit(false);
  }
}
