import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signup: any = {};
  signupArr: any = [];
  id: any;
userId: any;
  constructor( private _LoginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) { 
      // this.signupArr=[
      //  {username:"thiva",password:"t1508"},
      //  {username:"67",password:"6"}
      //     ]
    }

  ngOnInit(): void {
    console.log(this.signupArr)
  }
  onSubmit() {

    this._LoginService.login(this.signup).subscribe(res =>{
      console.log(res);
      localStorage.setItem('userId', res.data.loginObj.userId);    localStorage.setItem('currentUser', JSON.stringify(res));
    localStorage.setItem('token', res.data.jwt);
    localStorage.setItem('isProductOwner', res.data.loginObj.agentObj.isProductOwner);
    // this.toastr.success('Login Successfully!', 'Success!');
    
    this.router.navigate(['/WarehouseComponent']);
    },err =>{
    console.log(err);
    });
    }


}
