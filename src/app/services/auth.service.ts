import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppSettings } from '../utils/constant';

@Injectable()
export class AuthService {

  getHeaders() {
    const headers = new HttpHeaders();
    headers
      .set('Content-Type', 'application/json')
      .set('Authorization', localStorage.getItem('token'));
    return headers;
  }

  constructor(private http: HttpClient) { }

  login() {
    const params = {
      username: AppSettings.username,
      mnoId: AppSettings.mnoId,
      password: AppSettings.password
    };

    return this.http.post(`${AppSettings.API_ENDPOINT}/logon`, params)
      .map((res) => {
        localStorage.setItem('token', res['token']);
        localStorage.setItem('currentUser', JSON.stringify(res['user']));
        return res;
      });
  }

}
