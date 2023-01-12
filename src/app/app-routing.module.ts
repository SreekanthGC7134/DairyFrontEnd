import { provideCloudflareLoader } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home/home1/home1.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { DairyentryComponent } from './userhome/dairyentry/dairyentry.component';
import { DairyviewComponent } from './userhome/dairyview/dairyview.component';
import { ProfileComponent } from './userhome/profile/profile.component';
import { ProfileeditComponent } from './userhome/profileedit/profileedit.component';
import { TodoComponent } from './userhome/todo/todo.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { Userhome1Component } from './userhome/userhome1/userhome1.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [{path:'home',component:HomeComponent,
children:
[{path:'registration',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'home1',component:Home1Component}]
},

{path:'userhome',component:UserhomeComponent,canActivate:[AuthGuardService],
children:
[{path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
 {path:'profileedit',component:ProfileeditComponent,canActivate:[AuthGuardService]},
 {path:'dairyentry',component:DairyentryComponent,canActivate:[AuthGuardService]},
 {path:'todo',component:TodoComponent,canActivate:[AuthGuardService]},
 {path:'DairyView',component:DairyviewComponent,canActivate:[AuthGuardService]},
 {path:'userhome1',component:Userhome1Component,canActivate:[AuthGuardService]}
]},


{path:'',redirectTo:'/home/home1',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
