import { Component, OnInit } from '@angular/core';
import { WetherService } from './wether.service';
@Component({
  selector: 'app-bai40-weather-service',
  templateUrl: './bai40-weather-service.component.html',
  styleUrls: ['./bai40-weather-service.component.css'],
  providers: [WetherService]
})
export class Bai40WeatherServiceComponent implements OnInit {
  city;
  cityname="";
  temp;
  isloading = false;
  constructor(private WetherService : WetherService) { }

  ngOnInit() {
    // this.WetherService.getTemp('danang')
    // .then(temp => console.log(temp))
    // .catch(err => console.log(err));
  }
  show(){
    this.isloading = true;
    this.WetherService.getTemp(this.city)
    .then(temp => {this.cityname = this.city;
      this.temp = temp;
      this.isloading = false;
    })
    .catch(err => {
      alert('cant not file');
      this.isloading = false;
      this.cityname = '';
    });
  }
  getmessage (){
    if(this.isloading){
      return 'loadding .....';
    }
    return this.cityname === '' ? 'Enter your city name' : this.cityname + ' is now ' + this.temp;
  }
}
