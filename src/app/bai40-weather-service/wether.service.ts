import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()

export class WetherService {
  constructor (private http: Http){}

  getTemp(cityname : string){
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=08614133efcb172d51b564e737ec33e4&units=metric&q=' + cityname;
    return this.http.get(url)
    .toPromise()
    .then(res => res.json())
    .then(resJson => resJson.main.temp);
  }
}
