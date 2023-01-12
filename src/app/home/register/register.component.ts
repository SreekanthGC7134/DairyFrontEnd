import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

constructor(private fb: FormBuilder,private backendservice:BackEndServiceService){}

RegistrationForm=this.fb.group({
  Name:[''],
  Email:[''],
  Password:['']
})

OnSubmit()
{
// console.log(this.RegistrationForm.value)

this.backendservice.Reg(this.RegistrationForm.value)
}
}
