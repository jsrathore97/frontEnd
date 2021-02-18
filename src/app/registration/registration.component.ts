import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
fname;
lname;
city;
email;
password;
role="";
  constructor( private myservice : MyServiceService) { }

  ngOnInit() {
    this.clearRegForm();
  }


  register(){
      let data = {
        fname : this.fname,
        lname : this.lname,
        city : this.city,
        email : this.email,
        pass: this.password,
        role:this.role
      }
      this.myservice.checkExistance(data).subscribe((result:any)=>{
        if(result.status == 'User already exists'){
          Swal.fire({
                  text: 'User Already Exists',
                  icon: 'error'
                });
        } else{
               this.myservice.register(data).subscribe((result: any) => {
                 if (result.status == "success") {
                   Swal.fire({
                     text: "Registration Successfully",
                     icon: "success",
                   });
                   this.clearRegForm();
                 }
               });
        }
        
      })
      
     
  }
  clearRegForm(){
    this.fname = "";
    this.lname = "";
    this.city = "";
    this.email = "";
    this.password = "";
  }
}
