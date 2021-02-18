import { Component } from '@angular/core';
import { MyServiceService } from '../app/my-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private myservice:MyServiceService , private router : Router){  }
  ngOnInit(){  }



 

 
}
