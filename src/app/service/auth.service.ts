import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiURL = 'http://localhost:3000/user';
  GetAll() {
    return this.http.get(this.apiURL);
  }
  Getbycode(code: any) {
    return this.http.get(this.apiURL + '/' + code);
  }
  Proceedregister(inputData: any) {
    return this.http.post(this.apiURL, inputData);
  }
  Updateuser(code: any, inputData: any) {
    return this.http.put(this.apiURL + '/' + code, inputData);
  }
}
