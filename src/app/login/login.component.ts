import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { router } from '../app.routes';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  loginForm: FormGroup;

  constructor(fb : FormBuilder, private router: Router) {
    this.usernameCtrl = fb.control("", [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control("", [Validators.required]);
    this.loginForm = fb.group({
      username : this.usernameCtrl,
      password: this.passwordCtrl
    });
   }

  ngOnInit() {
  }

  login(){
    console.log(this.loginForm.value);
    if (this.loginForm){
      this.router.navigate(['/dashboard']);
    }
  }

}
