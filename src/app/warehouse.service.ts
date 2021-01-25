import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class WarehouseService  {
  aId: any;
  private url =' http://101.53.155.156/auth/login'
  private Burl ='http://101.53.155.156/api/trading/warehouse/get-all'

  constructor(private http : HttpClient) { }
  getUser(){

  }
}