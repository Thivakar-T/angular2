import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = ' http://101.53.155.156/auth/login'
  private Burl = 'http://101.53.155.156/api/trading/warehouse/get-all'
  private Burll = 'http://101.53.155.156/api/trading/warehouse/create'

  constructor(private http: HttpClient) { }
  public currentUser() {
    return localStorage.getItem('currentUser');
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  login(data: any) {
    return this.http.post<any>(this.url, data);
  }
  getUser() {
    return this.http.get(this.url)
  }
  getAllUsers() {
    return this.http.get(this.Burl)
  }
  addCreate(data: any) {
    return this.http.post<any>(this.Burll, data);
  }
}
