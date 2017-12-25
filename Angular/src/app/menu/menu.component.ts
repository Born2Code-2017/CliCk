import { Component, OnInit } from '@angular/core';
import { User } from '../user.module';
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterService } from '../filter.service';

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
  public searchQuery: string;
  
  constructor(private filterService: FilterService, private databaseService: DatabaseService, private router: Router, private activeRoute: ActivatedRoute, private sanitazer: DomSanitizer) {
    this.trashToggle = false;
    this.searchQuery = "";
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
    this.filterService.setTrashToggle();
  }

  public logOut() {
    sessionStorage.removeItem("loggedUser");
    localStorage.removeItem("loggedUser");
    this.router.navigate(["/login"]);
  }

  public searchByName() {
    this.filterService.setSearchQuery(this.searchQuery);
  }
}