import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './home/login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProfileComponent } from './userhome/profile/profile.component';
import { ProfileeditComponent } from './userhome/profileedit/profileedit.component';
import { DairyentryComponent } from './userhome/dairyentry/dairyentry.component';
import { DatePipe } from '@angular/common';
import { TodoComponent } from './userhome/todo/todo.component';
import { DairyviewComponent } from './userhome/dairyview/dairyview.component';
import { Home1Component } from './home/home1/home1.component';
import { Userhome1Component } from './userhome/userhome1/userhome1.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserhomeComponent,
    ProfileComponent,
    ProfileeditComponent,
    DairyentryComponent,
    TodoComponent,
    DairyviewComponent,
    Home1Component,
    Userhome1Component,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
