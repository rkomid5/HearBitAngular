import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";

import {UserApi} from "../../shared/SDK/services/custom";
import {User, AccessToken, SDKToken} from "../../shared/SDK/models";
import {LoopBackAuth} from "../../shared/SDK/services/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: UserApi, private auth: LoopBackAuth, private router: Router) { }

  ngOnInit() {
  }

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(30), Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(30)]),



  });

  private signin(): void {
    this.login.login(this.LoginForm.value).subscribe((token: SDKToken) => {
      this.auth.setToken(token);
      console.log(token);
      this.router.navigate(['table']);

    },error2 => {
      window.alert('Login Failed :(');
    });
  }

}
