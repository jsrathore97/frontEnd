import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  class_short_name = "";
  class_full_name = "";
  userName
  constructor(private myservice : MyServiceService) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('currentUser');
    this.getClasses();
  }


  AddClass(){
    let data = {
      classShortName : this.class_short_name,
      classFullName : this.class_full_name
    }
    this.myservice.add_class(data).subscribe((result:any)=>{
      if(result == 'success'){
        Swal.fire({
          text: 'Class Added Successsfully',
          icon: 'success'
        });
        this.getClasses();
        this.clearForm();
      }
      
    })
  }

  getClass;
  getClasses(){
    this.myservice.getClass().subscribe((result)=>{
      // console.log(result);
        this.getClass= result;
    })
  }

  clearForm()
  {
    this.class_full_name = "";
    this.class_short_name = "";
  }
}
