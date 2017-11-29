import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event, DBToMD5 } from '../event.module';
import { User } from '../user.module';

import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  eventsDB: Event[];
  usersDB: User[];
  event: Event;
  loggedUser: string;

  constructor(private http: HttpClient, private databaseService: DatabaseService, private router: Router) {
    if (!this.databaseService.loaded) {
      this.router.navigate(["/loading"], { queryParams: { page: "/new-event" } });
    }
    this.event = {
      owner_id: undefined,
      date: '',
      time: '',
      name: '',
      city: '',
      address: '',
      going: undefined,
      description: '',
      id: undefined,
      trashedBy: ["-1"],
      checkedBy: ["-1"]
    };
  }

  ngOnInit() {
    this.usersDB = this.databaseService.GetUsers();
    this.eventsDB = this.databaseService.GetEvents();
    this.loggedUser = this.databaseService.GetLoggedUser(sessionStorage.getItem("loggedUser"));
    this.event.owner_id = parseInt(this.loggedUser, 10);
    this.event.id = this.eventsDB.length;
    this.event.going = Math.floor((Math.random() * 1000) + 1);
  }

  goHome() {
    this.router.navigate(["/home"]);
  }

  createEvent() {
    this.eventsDB.push(this.event);
    this.databaseService.SetEvents(this.eventsDB);
    DBToMD5(this);
    this.databaseService.sendDB(this.router.navigate(["/home"]));
  }


}
