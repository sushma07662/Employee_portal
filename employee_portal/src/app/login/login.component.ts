import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    const loginData = this.loginForm.value;
    const user = this.authService.authenticate(loginData.email, loginData.password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this.router.navigate([user.role === 'admin' ? '/admin-dashboard' : '/employee-dashboard']);
    } else {
      this.errorMessage = 'Invalid login credentials';
    }
  }
}
