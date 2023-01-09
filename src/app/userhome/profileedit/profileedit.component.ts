import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.scss']
})
export class ProfileeditComponent {
  constructor(private fb:FormBuilder,private backendservice:BackEndServiceService){}

  ProfileEditForm=this.fb.group({
    firstname:[''],
    lastname:[''],
    dob:[''],
    phno:[''],
    address:[''],
    pin:[''],
    idno:[''],
    dlno:[''],
    email:[''],
    education:[''],
    passno:[''],
    bano:[''],
    country:[''],
    state:['']
  })
  OnSubmit()
  {
    // console.log(this.ProfileEditForm.value)
    this.backendservice.Profile(this.ProfileEditForm.value)
  }

}
