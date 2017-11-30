import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user.module';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usersDB: User[];

  public loggedUser: string;
  public sessionStatus: string;
  public avatar: any;
  public trashToggle: boolean;

  @Output() trashToggleOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private databaseService: DatabaseService, private router: Router, private sanitazer: DomSanitizer) {
  }

  ngOnInit() {
    this.usersDB = this.databaseService.GetUsers();
    this.loggedUser = this.databaseService.GetLoggedUser(sessionStorage.getItem("loggedUser"));
    this.avatar = this.sanitazer.bypassSecurityTrustUrl(this.usersDB[this.loggedUser].avatar);
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

  b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
}
