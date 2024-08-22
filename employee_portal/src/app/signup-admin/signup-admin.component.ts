import { Component } from '@angular/core';
import { createSignupForm } from '../signup-form';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.scss']
})
export class SignupAdminComponent {
  signupForm = createSignupForm();

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.signupForm.valid) {
      const adminData = { ...this.signupForm.value, role: 'admin' };
      this.http.post('http://localhost:3000/users', adminData).subscribe(response => {
        console.log('Admin Data:', response);
      });
    }
  }
}

