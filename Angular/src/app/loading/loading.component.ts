import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private databaseService: DatabaseService, private router: Router, private activeRoute: ActivatedRoute) {
    let getDB = setInterval(() => {
      if (databaseService.GetUsers() && databaseService.GetEvents()) {
        databaseService.loaded = true;
        if (sessionStorage.getItem("loggedUser") || localStorage.getItem("loggedUser")) {
          let currentRoute: string = "";
          activeRoute.queryParams.subscribe(params => {
            currentRoute = params["page"];
          });
          if (!currentRoute) {
            currentRoute = "/home";
          }
          router.navigate([currentRoute]);
        }
        else {
          router.navigate(["/login"]);
        }
        clearInterval(getDB);
      }
    }, 1000);
  }

  ngOnInit() {
  }

}
