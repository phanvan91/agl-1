import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Component({
  selector: 'app-ipcomponent',
  template: '<h3> {{ip}} </h3>'
})
export class IpComponent {
  ip;
  constructor(private ipservice : IpService) {

  }
  ngOnInit(): void {
    this.ipservice.getIp()
    .then(ip =>this.ip = ip)
    .catch(err => console.log(err));
  }
}
