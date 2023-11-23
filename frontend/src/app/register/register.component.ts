import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, UserCredentials } from '../services/auth.service';

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

  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  onSubmit() {
    console.log(this.form.value);
    const formValue: UserCredentials = this.form.value as UserCredentials;

    this.authService.register(formValue).subscribe()
  }

}
