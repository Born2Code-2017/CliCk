import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
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

  @Output() trashVisible: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.loggedUser = sessionStorage.getItem("loggedUser");
    let loggedUserName = this.usersDB[this.loggedUser].name;
    this.avatar = loggedUserName.substring(0, loggedUserName.indexOf(" ")).toLowerCase() + ".jpg";
  }

  public goHome() {
    this.updateSessionStatus("1");
  }

  public newEvent() {
    this.updateSessionStatus("2");
  }

  public viewTrash() {
    this.trashVisible.emit(null);
  }

  public logOut() {
    this.updateSessionStatus("0");
  }

  public updateSessionStatus(n: string) {
    this.sessionStatus = n;
    sessionStorage.setItem("sessionStatus", this.sessionStatus);
    location.reload();
  }

}
