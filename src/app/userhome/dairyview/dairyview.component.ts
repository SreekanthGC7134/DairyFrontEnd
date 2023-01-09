import { Component } from '@angular/core';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-dairyview',
  templateUrl: './dairyview.component.html',
  styleUrls: ['./dairyview.component.scss']
})
export class DairyviewComponent {
  constructor(private backendservice:BackEndServiceService){}
  Dataarray:any[]=[];

  ngOnInit()
  {
    this.backendservice.ViewDairy().subscribe((res)=>
    {
      this.Dataarray=res;
    })
  }

}
