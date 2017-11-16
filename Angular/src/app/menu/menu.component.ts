import { Component, Input } from '@angular/core';
import { User } from '../user.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() usersDB: User[];
  public loggedUser: string;

  public logOut() {
    sessionStorage.setItem("sessionStatus", "0");
    location.reload();
  }

  constructor() {
    this.loggedUser = sessionStorage.getItem("loggedUser");
  }

}
