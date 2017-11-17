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
  public logIn() {  
   for(var user in this.usersDB){
     if(this.usersDB[user].email == this.inputEmail && this.usersDB[user].password == this.inputPassword){
       console.log("ok");
       sessionStorage.setItem("sessionStatus", "1");
       location.reload();
     } else if (this.usersDB[user].email !== this.inputEmail && this.usersDB[user].password == this.inputPassword){  
      this.loginFail = "Wrong Email";
      break;
    } else if (this.usersDB[user].email == this.inputEmail && this.usersDB[user].password !== this.inputPassword){
      this.loginFail = "Wrong Password";
      break;
    }else if (this.usersDB[user].email !== this.inputEmail && this.usersDB[user].password !== this.inputPassword){
      this.loginFail = "Wrong Fields";
    }
   }
  }

  constructor() {
    sessionStorage.setItem("loggedUser", "0");   
  }
}
