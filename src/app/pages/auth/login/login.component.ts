import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
       email:['',[Validators.required,Validators.email]],
       password:['', Validators.required]
    })
  }

}
