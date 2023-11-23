import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    console.log(this.form.value);
  }

}
