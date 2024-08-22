
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-employee',
  templateUrl: './signup-employee.component.html',
  styleUrls: ['./signup-employee.component.scss']
})
export class SignupEmployeeComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      department: ['', Validators.required],
      role: ['employee']
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log('Employee Form Data:', formData);
      // Here you can handle the form data, e.g., send it to a server
    }
  }
}

