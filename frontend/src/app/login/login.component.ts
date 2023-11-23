import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, UserCredentials } from '../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  onSubmit() {
    const formValue: UserCredentials = this.form.value as UserCredentials;

    this.authService.login(formValue).subscribe(
      () => this.router.navigateByUrl('/protected'),
      err => console.log(err)
    )
  }

}
