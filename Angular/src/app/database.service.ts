import { Injectable } from '@angular/core';
import { User } from './user.module';
import { Event, DBToMD5 } from './event.module';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatabaseService {

  private usersDB: User[];
  private eventsDB: Event[];
  public loaded: boolean;

  constructor(private http: HttpClient) {
    this.loaded = false;
    this.getDB();
    /*this.getDB("users", 0);
    let currentStorage = localStorage.getItem("eventsDBHash");
    if (!currentStorage) {
      this.getDB("events", 1);
      console.log("Online DB");
    }
    else {
      this.http.get("https://click-e25d0.firebaseio.com/click.json").subscribe(data => {
        let eventsDBHash = data["hashes"];
        if (eventsDBHash[0] === JSON.parse(currentStorage)[0]) {
          let localEventDB = localStorage.getItem("eventsDB");
          this.eventsDB = JSON.parse(localEventDB);
          console.log("Local DB");
        }
        else {
          this.getDB("events", 1);
          console.log("Online DB");
        }
      });
    }*/
  }

  GetUsers() {
    return this.usersDB;
  }

  GetEvents() {
    return this.eventsDB;
  }

  SetUsers(usersDB) {
    this.usersDB = usersDB;
  }

  SetEvents(eventsDB) {
    this.eventsDB = eventsDB;
  }

  GetLoggedUser(loggedUser) {
    return this.usersDB.findIndex(x => x.hash === loggedUser).toString();
  }

  getDB() {
    this.http.get("https://click-e25d0.firebaseio.com/click.json").subscribe(data => {
      this.usersDB = data["users"];
      this.eventsDB = data["events"];
    });
    localStorage.setItem("eventsDB", JSON.stringify(this.eventsDB));
  }

  /*private getDB(path: string, db: number) {
    this.http.get("https://click-e25d0.firebaseio.com/click.json").subscribe(data => {
      switch (db) {
        case 0:
          this.usersDB = data[path];
          break;
        case 1:
          this.eventsDB = data[path];
          DBToMD5(this);
          break;
      }
    });
  }*/

  sendDB(post: any) {
    this.http.put("https://click-e25d0.firebaseio.com/click/events.json/", JSON.stringify(this.eventsDB)).subscribe(data => {
      post;
    });
  }
}
