import { Component, OnInit } from '@angular/core';

import { User } from './user.module';
import { Event } from './event.module';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Session Status: 0 => Not logged in // 1 => Logged in // 2 => Logged in + New event
  sessionStatus: string;
  usersDB: User[];
  eventsDB: Event[];
  trashToggle: boolean;

  constructor(private http: HttpClient) {
    this.sessionStatus = "0";
    let currentSession = sessionStorage.getItem("sessionStatus");
    if (currentSession !== null) {
      this.sessionStatus = currentSession;
    }
    this.trashToggle = false;
  }

  ngOnInit() {
    this.getDB("users", 0);
    this.getDB("events", 1);
  }

  trashToggleInput(payload) {
    if (this.trashToggle === false) {
      this.trashToggle = true;
    }
    else {
      this.trashToggle = false;
    }
  }

  trashEventInput(payload) {
    this.eventsDB = payload;
  }

  getDB(path: string, db: number) {
    this.http.get("https://click-e25d0.firebaseio.com/click.json").subscribe(data => {
      switch (db) {
        case 0:
          this.usersDB = data[path];
          break;
        case 1:
          this.eventsDB = data[path];
          break;
      }
    });
  }
}