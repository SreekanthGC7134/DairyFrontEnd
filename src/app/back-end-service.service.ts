import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {

  constructor(private http:HttpClient,private router:Router) { }

  Reg(data:any)
  {
    this.http.post("https://localhost:44385/api/Registration/Registration",data).toPromise().then(result=>{console.log(result);})
  }

  login(loginInfo: Array<string>) {
    return this.http.post("https://localhost:44385/api/Registration/login", {
      email: loginInfo[0],
      password: loginInfo[1],
    },
      {
        responseType: 'text',
      });
    }
  

  Profile(data:any)
  {
    this.http.post("https://localhost:44385/api/Profile/Profile",data).toPromise().then(result=>{console.log(result);}) 
  }
  ViewProfile(xid:any)
  {
    return this.http.get<any>("https://localhost:44385/api/Profile/Viewprofile/"+xid)
  }
  Dairyentry(data:any)
  {
    this.http.post("https://localhost:44385/api/DairyEntry/DairyEntry",data).toPromise().then(result=>{console.log(result);})
  }
  ViewDairy()
  {
    return this.http.get<any>("https://localhost:44385/api/DairyEntry/ViewDairy");
  }
  // todoget() {
  //   return this.http.get<any>('https://localhost:44320/api/Todo/viewdata')

  // }
//   todoinsert(data: any) {
//     this.http.post("https://localhost:44385/api/ToDo/Inserttodo", data).toPromise().then(result =>
//     {
//   console.log(data); 
//   console.log(result); alert("Value Inserted Sucessfully !!");//this.router.navigate(['app']);
//  }
//   )

// }

todoinsert(data:any)
{
  this.http.post("https://localhost:44385/api/ToDo/Inserttodo",data).toPromise().then(result=>{console.log(result);}) 
}
}
