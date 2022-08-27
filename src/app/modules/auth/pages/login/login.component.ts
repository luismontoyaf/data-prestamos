import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginEmail: String;
  loginPassword: String;
  canlogin: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /*constructor(private router: Router){
    
  }

  btnClick= function(){
    this.router.navigateByUrl('././home')
  }*/

  public loginAction(){
   /* if(this.loginEmail == "Elsisas" && this.loginPassword == "Obvio"){
      this.canlogin = true;
    }*/

    alert("this.loginEmail" && "this.loginPassword");
  }

}


