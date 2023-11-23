import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, UserCredentials } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  onSubmit() {
    console.log(this.form.value);
    const formValue: UserCredentials = this.form.value as UserCredentials;

    this.authService.register(formValue).subscribe(
      () => this.router.navigateByUrl('/login'),
      err => console.log(err)
    )
  }

}
