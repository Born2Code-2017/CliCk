import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() usersDB: User[];
  public loggedUser: string;
  public sessionStatus: string;
  public avatar: string;

  public logOut() {
    this.sessionStatus = "0";
    sessionStorage.setItem("sessionStatus", this.sessionStatus);
    location.reload();
  }

  constructor() {
    this.loggedUser = sessionStorage.getItem("loggedUser");
  }

  ngOnInit() {
    let loggedUserName = this.usersDB[this.loggedUser].name;
    this.avatar = loggedUserName.substring(0, loggedUserName.indexOf(" ")).toLowerCase() + ".jpg";
  }

}
