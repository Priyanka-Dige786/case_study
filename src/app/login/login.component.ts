import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails =
              {
                email : "",
                password : ""
              };
 
  constructor( private authService : AuthService,
               private router : Router) { }

  ngOnInit() 
  {
  }
  message;
  SignIn()
  {
    let isValid = this.authService.CheckUser(this.userdetails);
    console.log(this.userdetails);
    if(isValid)
    {
           this.router.navigate(['edit']);
    }
    else
    {
           this.message = "Uname / passwod is wrong"
    }
  }

}
