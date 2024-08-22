import { Component } from '@angular/core';
import { createSignupForm } from '../signup-form';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-employee',
  templateUrl: './signup-employee.component.html',
  styleUrls: ['./signup-employee.component.scss']
})
export class SignupEmployeeComponent {
  signupForm = createSignupForm();

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.signupForm.valid) {
      const employeeData = { ...this.signupForm.value, role: 'employee' };
      this.http.post('http://localhost:3000/users', employeeData).subscribe(response => {
        console.log('Employee Data:', response);
      });
    }
  }
}
