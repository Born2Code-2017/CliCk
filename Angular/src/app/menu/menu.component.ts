import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user.module';
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  public currentPath: string;

  @Output() trashToggleOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private databaseService: DatabaseService, private router: Router, private activeRoute: ActivatedRoute, private sanitazer: DomSanitizer) {
    this.trashToggle = false;
  }

  ngOnInit() {
    this.usersDB = this.databaseService.GetUsers();
    let session = sessionStorage.getItem("loggedUser");
    if (session) {
      this.loggedUser = this.databaseService.GetLoggedUser(session);
    }
    else {
      this.loggedUser = this.databaseService.GetLoggedUser(localStorage.getItem("loggedUser"));
    }
    this.avatar = this.sanitazer.bypassSecurityTrustUrl(this.usersDB[this.loggedUser].avatar);
    this.currentPath = this.activeRoute.snapshot.url[0].path;
  }

  public goHome() {
    this.router.navigate(["/home"]);
  }

  public newEvent() {
    this.router.navigate(["/new-event"]);
  }

  public viewTrash() {
    this.trashToggle = !this.trashToggle;
    this.trashToggleOutput.emit(this.trashToggle);
  }

  public logOut() {
    sessionStorage.removeItem("loggedUser");
    localStorage.removeItem("loggedUser");
    this.router.navigate(["/login"]);
  }
}