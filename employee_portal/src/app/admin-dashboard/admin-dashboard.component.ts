import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  employees = [];
  filteredEmployees = [];

  ngOnInit() {
    this.employees = JSON.parse(localStorage.getItem('users') || '[]');
    this.filteredEmployees = this.employees;
  }

  onSearch(query: string) {
    this.filteredEmployees = this.employees.filter(employee => employee.name.includes(query));
  }

  deleteEmployee(employee) {
    this.employees = this.employees.filter(emp => emp !== employee);
    this.filteredEmployees = this.employees;
    localStorage.setItem('users', JSON.stringify(this.employees));
  }
}
