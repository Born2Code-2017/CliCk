import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input()
  usersDB: User[];
  loginFail: string;
  inputEmail: string;
  inputPassword: any;
  name: string;
  validation: boolean;
  failEmail: boolean;
  failPsw: boolean;
  public logIn() {      
   for(var user in this.usersDB){
      if(this.usersDB[user].email == this.inputEmail && this.usersDB[user].password == this.inputPassword){
       this.validation = true;
       this.failEmail = false;
       this.failPsw = false;       
       sessionStorage.setItem("sessionStatus", "1");
       location.reload();
       break;
    } else if (this.usersDB[user].email !== this.inputEmail && this.usersDB[user].password !== this.inputPassword){
      this.failEmail = true;
      this.failPsw = true; 
      this.validation = false;        
      this.loginFail = "Insert valid email and password!";         
      break;
    } else if (this.usersDB[user].email !== this.inputEmail){
      this.validation = false;  
      this.loginFail = "Insert valid email!";
      this.failEmail = true;
      this.failPsw = false;    
      break;
    } else if (this.usersDB[user].password !== this.inputPassword){
      this.validation = false;        
      this.loginFail = "Insert valid password!";
      this.failPsw = true;
      this.failEmail = false;
      break;
    }
   }
  }
  constructor() {
    sessionStorage.setItem("sessionStatus", "0");
    this.validation = true;
  }
}