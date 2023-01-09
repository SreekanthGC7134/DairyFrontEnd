import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-dairyentry',
  templateUrl: './dairyentry.component.html',
  styleUrls: ['./dairyentry.component.scss']
})
export class DairyentryComponent {
  currdate: any;
  constructor(public datepipe: DatePipe,private fb: FormBuilder,private backendservice:BackEndServiceService){


    let currentDateTime =this.datepipe.transform((new Date), 'EEEE, MMMM d, y');
    this.currdate=currentDateTime;
    //console.log(currentDateTime);
  }
  DiaryEntryForm = this.fb.group({
    Date: [''],
    Entry: ['']
  })

      OnSubmit() {
      console.log(this.DiaryEntryForm.value);
      this.backendservice.Dairyentry(this. DiaryEntryForm.value)
        }

      ngOnInit():void {}


}
