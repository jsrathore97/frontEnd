import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName;
  constructor() { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('currentUser');
  }

}
