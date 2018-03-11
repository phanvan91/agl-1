import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SignService {
  constructor(private http: Http) { }

  sendpost(value){
    const url = 'http://localhost:3000/sign';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(value);
    return this.http.post(url, body, {headers })
    .toPromise()
    .then(res => res.json())
  }
}
