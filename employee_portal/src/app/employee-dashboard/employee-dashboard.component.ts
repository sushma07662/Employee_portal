import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  employees = [];

  ngOnInit() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    this.employees = allUsers.filter(user => user.department === loggedInUser.department);
  }
}


