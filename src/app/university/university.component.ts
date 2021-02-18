import { Component, OnInit } from '@angular/core';
import * as M from 'minimatch';
import { MyServiceService } from '../my-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  userName;
  univ_short_name="";
  univ_full_name = "";
  constructor(private myservice : MyServiceService) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('currentUser');
    this.getUniversity();
  }


  add_university(){
    let data = {
      univ_shortName  : this.univ_short_name,
      univ_fullName : this.univ_full_name
    }
    this.myservice.add_university(data).subscribe((result:any)=>{
      if(result == 'success'){
        Swal.fire({
          text: 'University Added Successsfully',
          icon: 'success'
        });
        this.getUniversity();
        this.clearForm();
      }
    })
  }

  universitydata;
  getUniversity(){
    this.myservice.getUniversity().subscribe((result)=>{
      this.universitydata = result;
      
    })
  }

  clearForm(){
    this.univ_short_name = "";
    this.univ_full_name = "";
  }
}
