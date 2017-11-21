import { Component, OnInit } from '@angular/core';
import { User } from './user.module';
import { Event } from './event.module';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Session Status: 0 => Not logged in // 1 => Logged in // 2 => Logged in + New event
  sessionStatus: string;
  usersDB: User;
  eventsDB: Event;

  constructor(private db: AngularFireDatabase) {
    this.sessionStatus = "0";
    let currentSession = sessionStorage.getItem("sessionStatus");
    if (currentSession !== null) {
      this.sessionStatus = currentSession;
    }
  }

  ngOnInit() {
    this.getDB("users/", 0);
    this.getDB("events/", 1);
  }

  getDB(path, n) {
    let DB: any;
    this.db.database.ref(path).once("value", function (snap) {
      DB = snap.val();
    }).then(() => {
      switch (n) {
        case 0:
          this.usersDB = DB;
          break;
        case 1:
          this.eventsDB = DB;
          break;
      }
    });
  }
}