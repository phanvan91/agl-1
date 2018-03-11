import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<h3> {{value}} </h3>
  <app-child (myclick)="changeValue($event)"></app-child>
  `
})

export class ParentComponent {
  value = 0;
  changeValue(isadd : boolean){
    if(isadd){
      return this.value = this.value + 1;
    }else{
      return this.value = this.value - 1;
    }

  }
}
