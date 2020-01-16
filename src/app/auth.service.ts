import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router : Router,
    private service: DataService)
  {

  }
  canActivate(route: ActivatedRouteSnapshot,
             state: RouterStateSnapshot) 
  {
    if(this.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }
   
  isLoggedIn()
  {
    if(window.sessionStorage.getItem("active") != null &&
       window.sessionStorage.getItem("active") == "1")
    {
         return true;
    }
    return false;
  }
  CheckUser(userdetails) 
  {
    if(this.service.Check(userdetails))
    {
      window.sessionStorage.setItem("active","1");
      return true;
    }
    else
    {
      return false;
    }
  }

  SignOut()
  {
    window.sessionStorage.setItem("active","0");
  }
}
