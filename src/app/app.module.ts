import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import{ MyServiceService } from '../app/my-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import  { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { SchoolComponent } from './school/school.component';
import { ClassComponent } from './class/class.component';
import { UniversityComponent } from './university/university.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    StudentsComponent,
    SchoolComponent,
    ClassComponent,
    UniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
     },
      {
         path: 'register',
         component: RegistrationComponent
      },
      {
        path: 'login',
        component: LoginComponent
     },
     {
      path: 'dashboard',
      component: DashboardComponent
   },
   {
    path: 'students',
    component: StudentsComponent
 },
   {
  path: 'school',
  component: SchoolComponent
},
{
  path: 'class',
  component: ClassComponent
},
{
  path: 'university',
  component: UniversityComponent
},

   ])
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
