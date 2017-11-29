import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user.module';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usersDB: User[];

  public loggedUser: string;
  public sessionStatus: string;
  public avatar: string;
  public trashToggle: boolean;

  @Output() trashToggleOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private databaseService: DatabaseService, private router: Router) {
  }

  ngOnInit() {

    if (this.databaseService.GetUsers() === undefined) {
      let getDB = setInterval(() => {
        if (this.databaseService.GetUsers() !== undefined) {
          this.usersDB = this.databaseService.GetUsers();
          this.usersDB = this.databaseService.GetUsers();
          this.loggedUser = sessionStorage.getItem("loggedUser");
          this.loggedUser = this.databaseService.GetLoggedUser(sessionStorage.getItem("loggedUser"));
          let loggedUserName = this.usersDB[this.loggedUser].name;
          this.avatar = loggedUserName.substring(0, loggedUserName.indexOf(" ")).toLowerCase() + ".jpg";
          clearInterval(getDB);
        }
      }, 1000);
    }
    else {
      this.usersDB = this.databaseService.GetUsers();
      this.usersDB = this.databaseService.GetUsers();
      this.loggedUser = sessionStorage.getItem("loggedUser");
      this.loggedUser = this.databaseService.GetLoggedUser(sessionStorage.getItem("loggedUser"));
      let loggedUserName = this.usersDB[this.loggedUser].name;
      this.avatar = loggedUserName.substring(0, loggedUserName.indexOf(" ")).toLowerCase() + ".jpg";
    }
  }

  public goHome() {
    this.router.navigate(["/home"]);
  }

  public newEvent() {
    this.router.navigate(["/new-event"]);
  }

  public viewTrash() {
    this.router.navigate(["/home"]);
    this.trashToggle = !this.trashToggle;
    this.trashToggleOutput.emit(!this.trashToggle);
  }

  public logOut() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
}
