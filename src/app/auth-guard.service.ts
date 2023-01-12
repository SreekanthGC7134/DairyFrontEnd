import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('token') === 'authenticated') {
      return true;
    } else {
      this.router.navigate(['/home/home1']);
      return false;
    }
  }

}
