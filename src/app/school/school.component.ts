import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  userName;
  school_name='';
  city_name='';
  constructor(private myservice : MyServiceService) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('currentUser');
    this.getAllSchool();
  }


  addSchool(){
    let data = {
      school_name : this.school_name,
      city_name : this.city_name
    }
    this.myservice.add_school(data).subscribe((result:any)=>{
      if(result == 'success'){
        Swal.fire({
          text: 'School Added Successsfully',
          icon: 'success'
        });
        this.getAllSchool();
        this.clearForm();
      }
      
    })
  }
  clearForm(){
    this.school_name = "";
    this.city_name = "";
  }

allSchooldata;
  getAllSchool(){
    this.myservice.getAllSchool().subscribe((result:any)=>{
      console.log(result.length > 0);
        this.allSchooldata = result;
       
    })
  }

  delete(delId){
      let data = {
        id :delId
      }
      this.myservice.delete_school(data).subscribe((result)=>{
        if(result == 'success'){
          Swal.fire({
            text: 'Deleted Successsfully',
            icon: 'success'
          });
          this.getAllSchool();
        }
        
      })
  }

  disbl;
  schoolEditId;
  edit(data){
    this.updatedisbl = false;
    this.school_name = data.school_name;
    this.city_name  = data.city;
    this.schoolEditId = data.id;
  }

  updatedisbl= true;
  updateSchool(){
    let data = {
      school_name : this.school_name,
      city_name : this.city_name,
      school_id : this.schoolEditId
    }
    this.myservice.update_school(data).subscribe((result:any)=>{
      if(result == 'success'){
        Swal.fire({
          text: 'Updated Successsfully',
          icon: 'success'
        });
        this.getAllSchool();
        this.updatedisbl = true;
        this.clearForm();
      
      }
      
    })
  }
}
