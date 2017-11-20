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
  sessionStatus: string;
  public logIn() { 
    for(var i=0; i<this.usersDB.length; i++){  
      if(this.usersDB[i].email !== this.inputEmail && this.usersDB[i].password !== this.inputPassword) {
      this.failEmail = true;
      this.failPsw = true; 
      this.validation = false;        
      this.loginFail = "Insert valid email and password!";             
    }     
   }
   for(var i=0; i<this.usersDB.length; i++){    
      if(this.usersDB[i].email == this.inputEmail && this.usersDB[i].password == this.inputPassword){
       this.validation = true;
       this.failEmail = false;
       this.failPsw = false; 
       this.sessionStatus = "1";
       sessionStorage.setItem("sessionStatus", this.sessionStatus);
       sessionStorage.setItem("loggedUser", this.usersDB[i].id.toString());
       location.reload();
       break;
    } else if (this.usersDB[i].email == this.inputEmail){
      this.failPsw = true;
      this.failEmail = false; 
      this.validation = false;        
      this.loginFail = "Insert valid password!";    
    }else if (this.usersDB[i].password == this.inputPassword){   
      this.failEmail = true;
      this.failPsw = false; 
      this.validation = false;
      this.loginFail = "Insert valid email!";         
    }  
   } 
  }
  constructor() {
    this.sessionStatus = "0";
    sessionStorage.setItem("sessionStatus", this.sessionStatus);
    this.validation = true;
  }
}