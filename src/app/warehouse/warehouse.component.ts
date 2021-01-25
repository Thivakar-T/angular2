import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { WarehouseService } from '../warehouse.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { AuthenticationService } from '../services/auth.service';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  CatagoryArr: any = [];
  CatagoryObj: any = {};
  id : any;
  userId : any;

  constructor(private LoginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    this.LoginService.getAllUsers().subscribe((data:any) => {
    this.CatagoryArr = data.data;
    console.log(this.CatagoryArr);
    }, error => {
    console.log(error);
    })
    
    this.submit();
  }
  submit(){
    console.log(this.CatagoryObj);
    this.CatagoryObj.countryObj = {'id':"184f3d5e-757a-433b-b6c0-8065017980ad"};

    this.LoginService.addCreate(this.CatagoryObj).subscribe(res => {
      console.log(res);
      this.router.navigate(['/WarehouseComponent']);
  })
}
  }
