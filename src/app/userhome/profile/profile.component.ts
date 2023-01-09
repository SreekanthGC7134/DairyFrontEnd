import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  pid:any;

  Profiledataarray: any[]=[];

  ProfileViewForm: FormGroup;



  constructor(private fb:FormBuilder,private router:Router,private backendservice:BackEndServiceService,private route:ActivatedRoute){



  this.route.paramMap.subscribe((params: ParamMap) => {

    this.pid = params.get('id')

    })

    this.ProfileViewForm = this.fb.group({

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

  }

  ngOnInit(): void {

    //throw new Error('Method not implemented.');

     var xid:number=2;

    // var pid:number=2;

    this.backendservice.ViewProfile(xid).subscribe((data: any) => {

      this.Profiledataarray = data;

      this.ProfileViewForm.setValue({

        // pid: data.pid,

        firstname: data.firstname,

        lastname: data.lastname,

        dob:data.dob,

        phno:data.phno,

        address:data.address,

        pin:data.pin,

        idno:data.idno,

        dlno:data.dlno,

        email:data.email,

        education:data.education,

        passno:data.passno,

        bano:data.bano,

        country:data.country,

        state:data.state

    });

  });

  }

  Onsubmit()

  {

    this.router.navigate(['/userhome/profileedit'])

  }


}
