import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userName;
userRole;
  constructor(private myservice : MyServiceService) { }

  ngOnInit() {
      this.userName = sessionStorage.getItem('currentUser');
      this.userRole = sessionStorage.getItem('userRole');
      
  }





}
