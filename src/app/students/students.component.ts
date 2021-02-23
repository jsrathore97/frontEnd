import { Component, OnInit } from '@angular/core';
import * as M from 'minimatch';
import { MyServiceService }  from '../my-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  userName;
  getClassList;
  getSchoolList;
  getUniversityList;
  constructor(private myservice : MyServiceService) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('currentUser');

    this.myservice.getClassesList().subscribe((result)=>{
        this.getClassList = result;
        console.log(result);
        
    });

    this.myservice.getSchoolList().subscribe((result)=>{
      this.getSchoolList = result;
    })

    this.myservice.getUniversityList().subscribe((result)=>{
      this.getUniversityList = result;
    })

    this.getAllStudent();
  }

  allStudentList;
  getAllStudent(){  
    this.myservice.getAllStudent().subscribe((result)=>{
      this.allStudentList = result;
    })
  }

  student_name;
  student_f_name;
  student_m_name;
  student_city;
  student_mob;
  student_admissionType="";
  student_class="";
  student_school="";
  student_university="";

  addSchool(){
    let data = {
      student_name : this.student_name,
      student_f_name : this.student_f_name ,
      student_m_name : this.student_m_name ,
      student_city : this.student_city,
      student_mob :  this.student_mob ,
      student_admissionType : this.student_admissionType ,
      student_class_id : this.student_class ,
      student_school_id : this.student_school ,
      student_university_id : this.student_university
    }
    console.log(data)
    this.myservice.addStudent(data).subscribe((result)=>{
      if(result == 'success'){
        Swal.fire({
          text: 'Student Added Successsfully',
          icon: 'success'
        });
       this.getAllStudent()
        this.clearForm();
      }
      
    })
    
  }


  clearForm(){
    this.student_name="";
    this.student_f_name="";
    this.student_m_name="";
    this.student_city="";
    this.student_mob="";
    this.student_admissionType="";
    this.student_class="";
    this.student_school="";
    this.student_university="";
  }
}
