import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, UserCredentials } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  onSubmit() {
    const formValue: UserCredentials = this.form.value as UserCredentials;

    this.authService.login(formValue).subscribe()
  }

}
