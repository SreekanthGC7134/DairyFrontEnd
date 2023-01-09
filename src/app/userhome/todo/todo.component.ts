import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  constructor(private backendservice:BackEndServiceService,private fb: FormBuilder,private router: Router){
    
  }
  Dataarray: any[]=[];
  ToDoForm=this.fb.group({
    task:[''],
    status:['']
  })
  ngOnInit()
  {
    //this.backendservice.todoget().subscribe((res) => {
    //         this.Dataarray = res;})
  }

  OnSubmit()
  {
    console.log(this.ToDoForm.value);
    this.backendservice.todoinsert(this. ToDoForm.value)
    // console.log(this.ToDoForm.value);
    //   this.backendservice.todoinsert(this. ToDoForm.value)
      // this.router.navigate(['app']);
  }

}
