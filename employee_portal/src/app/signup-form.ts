import { FormGroup, FormControl, Validators } from '@angular/forms';

export const createSignupForm = () => new FormGroup({
  name: new FormControl('', [Validators.required]),
  age: new FormControl('', [Validators.required, Validators.min(18)]),
  mob: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
  department: new FormControl('', [Validators.required]),
  role: new FormControl('', [Validators.required])
});
