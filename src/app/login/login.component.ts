import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myservice :MyServiceService ,
              private router : Router) { }

  ngOnInit() {
  }

  email;
  password;
  login(){
    let data = {
        email : this.email,
        password : this.password,
        role : 'user'
    }
      this.myservice.login(data).subscribe((result:any)=>{
        console.log(result);
        if(result.status == 'matched'){
          Swal.fire({
            text: 'Email & Password Matched Successfully for User...',
            icon: 'success'
          });
          let name = result.data[0].first_Name + result.data[0].last_Name 
        sessionStorage.setItem('currentUser' , name);
        sessionStorage.setItem('userRole' , result.data[0].role)
          this.router.navigateByUrl('/dashboard');
        } else{
          Swal.fire({
            text: 'Wrong Email & Password',
            icon: 'error'
          });
        }
      })
    
  }

  login_admin(){
    let data = {
      email : this.email,
      password : this.password,
      role : 'admin'
  }
    this.myservice.login_admin(data).subscribe((result:any)=>{
      console.log(result);
      if(result.status == 'matched'){
        Swal.fire({
          text: 'Email & Password Matched Successfully for Admin...',
          icon: 'success'
        });
        let name = result.data[0].first_Name + result.data[0].last_Name 
      sessionStorage.setItem('currentUser' , name);
      sessionStorage.setItem('userRole' , result.data[0].role)
        this.router.navigateByUrl('/dashboard');
      } else{
        Swal.fire({
          text: 'Wrong Email & Password',
          icon: 'error'
        });
      }
    })
  }

}
