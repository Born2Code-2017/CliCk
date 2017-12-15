import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event.module';
import { User } from '../user.module';

import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  providers: [DatePipe]
})
export class NewEventComponent implements OnInit {
  eventsDB: Event[];
  usersDB: User[];
  event: Event;
  loggedUser: string;
  today: any;

  constructor(private http: HttpClient, private databaseService: DatabaseService, private router: Router, private datePipe: DatePipe) {
    if (!this.databaseService.loaded) {
      this.router.navigate(["/loading"], { queryParams: { page: "/new-event" } });
    }
    this.event = {
      owner_id: undefined,
      date: "",
      time: "",
      name: "",
      city: "",
      address: "",
      going: undefined,
      description: "",
      id: undefined,
      trashedBy: ["-1"],
      checkedBy: ["-1"]
    };
    this.today = Date.now();
  }

  ngOnInit() {
    this.usersDB = this.databaseService.GetUsers();
    this.eventsDB = this.databaseService.GetEvents();
    let session = sessionStorage.getItem("loggedUser");
    if (session) {
      this.loggedUser = this.databaseService.GetLoggedUser(session);
    }
    else {
      this.loggedUser = this.databaseService.GetLoggedUser(localStorage.getItem("loggedUser"));
    }
    this.event.owner_id = parseInt(this.loggedUser, 10);
    this.event.id = this.eventsDB.length;
    this.event.going = Math.floor((Math.random() * 1000) + 1);
    this.event.time = this.datePipe.transform(this.today, "HH:mm")
    this.event.date = this.datePipe.transform(this.today, "yyyy-MM-dd");
  }

  goHome() {
    this.router.navigate(["/home"]);
  }

  createEvent() {
    this.eventsDB.push(this.event);
    this.databaseService.SetEvents(this.eventsDB);
    this.databaseService.sendDB(this.router.navigate(["/home"]));
  }


}
