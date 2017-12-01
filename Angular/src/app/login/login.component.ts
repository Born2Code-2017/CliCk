import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user.module';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersDB: User[];
  loginFail: string;
  forgotFail: string;
  inputEmail: string;
  inputPassword: any;
  name: string;
  validation: boolean;
  failEmail: boolean;
  failPsw: boolean;
  sessionStatus: number;
  remember: string;
  rememberMeLogin: boolean;
  forgot: boolean;
  button: string;

  constructor(private http: HttpClient, private databaseService: DatabaseService, private router: Router) {
    if (!this.databaseService.loaded) {
      this.router.navigate(["/loading"]);
    }
    this.remember = 'Forgot your password?';
    this.rememberMeLogin = false;
  }

  ngOnInit() {
    this.usersDB = this.databaseService.GetUsers();
  }

  public logIn() {
    for (var i = 0; i < this.usersDB.length; i++) {
      if (this.usersDB[i].email !== this.inputEmail && this.usersDB[i].password !== this.inputPassword) {
        this.failEmail = true;
        this.failPsw = true;
        this.validation = false;
        this.loginFail = "Insert valid email and password!";
      }
    }
    for (var i = 0; i < this.usersDB.length; i++) {
      if (this.usersDB[i].email == this.inputEmail && this.usersDB[i].password == this.inputPassword) {
        this.validation = true;
        this.failEmail = false;
        this.failPsw = false;
        this.router.navigate(["/home"]);
        if (this.rememberMeLogin) {
          localStorage.setItem("loggedUser", this.usersDB[i].hash.toString());
        } else {
          sessionStorage.setItem("loggedUser", this.usersDB[i].hash.toString());
        }
        break;
      } else if (this.usersDB[i].email == this.inputEmail) {
        this.failPsw = true;
        this.failEmail = false;
        this.validation = false;
        this.loginFail = "Insert valid password!";
      } else if (this.usersDB[i].password == this.inputPassword) {
        this.failEmail = true;
        this.failPsw = false;
        this.validation = false;
        this.loginFail = "Insert an existing email!";
      }
    }
  }

  public send() {
    for (var i = 0; i < this.usersDB.length; i++) {
      if (this.usersDB[i].email == this.inputEmail) {
        this.failEmail = false;
        this.failPsw = false;
        this.forgotFail = "We've sent you an email!";

        break;
      } else if (this.usersDB[i].email !== this.inputEmail) {
        this.failEmail = true;
        this.failPsw = false;
        this.forgotFail = "Insert an existing email!";
      }
    }
  }

  public forgotPsw() {
    this.failEmail = false;
    this.forgot = true;
    this.validation = true;
  }

  public goBack() {
    this.forgot = false;
    this.failEmail = false;
    this.failPsw = false;
  }
}