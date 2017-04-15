import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NavigationService } from '../core/navigation.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loggingIn = false;
  loginSuccess = false;
  loginError = false;

  constructor(private formBuilder: FormBuilder,
              private navigationService: NavigationService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.navigationService.setTitle('Login');
  }

  ngOnDestroy() {
    this.navigationService.setTitle(null);
  }

  onSubmit() {
    // This is just a mock of an API call for testing
    this.loggingIn = true;
    this.loginSuccess = false;
    this.loginError = false;
    setTimeout(
      () => {
        const {email, password} = this.loginForm.value;
        if (email === 'user' && password === 'pass') {
          this.loginSuccess = true;
        } else {
          this.loginError = true;
        }
        this.loggingIn = false;
      },
      2000);
  }
}
