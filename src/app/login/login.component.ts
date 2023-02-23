import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup | any;
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      reminderLogin: [false]
    });
  }
  
  isFormValid(): boolean {
    return this.loginForm.valid;
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.isFormValid()) {
      console.error('Hay errores en el formulario')
      return;
    }
    console.log('OK');
  }

}
