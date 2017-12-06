import { Injectable } from '@angular/core';
import { User } from './user.module';
import { Event } from './event.module';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatabaseService {

  private usersDB: User[];
  private eventsDB: Event[];
  public loaded: boolean;

  constructor(private http: HttpClient) {
    this.loaded = false;
    this.getDB();
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
  }

  sendDB(post: any) {
    this.http.put("https://click-e25d0.firebaseio.com/click/events.json/", JSON.stringify(this.eventsDB)).subscribe(data => {
      post;
    });
  }
}
