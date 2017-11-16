import { Component, Input } from '@angular/core';
import { User } from '../user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() usersDB: User[];

  constructor() {
    sessionStorage.setItem("sessionStatus", "1");
    sessionStorage.setItem("loggedUser", "0");
    location.reload();
  }
}
