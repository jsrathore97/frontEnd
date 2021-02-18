import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  userName;
  constructor() { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('currentUser');
  }

}
