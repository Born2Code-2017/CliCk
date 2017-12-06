import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {

  constructor(private databaseService: DatabaseService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  postLogin() {
    this.databaseService.loaded = true;
    if (sessionStorage.getItem("loggedUser") || localStorage.getItem("loggedUser")) {
      let currentRoute: string = "";
      this.activeRoute.queryParams.subscribe(params => {
        currentRoute = params["page"];
      });
      if (!currentRoute) {
        currentRoute = "/home";
      }
      this.router.navigate([currentRoute]);
    }
    else {
      this.router.navigate(["/login"]);
    }
  }

  ngDoCheck() {
    if (this.databaseService.GetUsers() && this.databaseService.GetEvents()) {
      this.postLogin();
    }
  }
}
