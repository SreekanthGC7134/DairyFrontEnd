import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent {

  constructor(private router:Router){}

  logout() {
    if (this.canLogout()) {
      localStorage.removeItem('token');
      this.router.navigate(['/home/home1']);
    }
    else { 
      // show an error message or take other action 
    } }

    canLogout()
     {
       // check for conditions here and return true or false 
      return true;
     }

    }
