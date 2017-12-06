import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { User } from '../user.module';
import { Event } from '../event.module';

import { HttpClient } from '@angular/common/http';

import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  animations: [
    trigger('slideRight', [
      state('false', style({
        transform: "scale(2)"
      })),
      state('true', style({
        transform: "scale(1)"
      })),
      transition('false => true', animate('500ms ease-in')),
    ])
  ]
})

export class EventsListComponent implements OnInit {
  usersDB: User[];
  eventsDB: Event[];
  loggedUser: string;
  trashToggle: boolean;
  selectionID: number;
  booted: boolean;

  constructor(private http: HttpClient, private databaseService: DatabaseService, private router: Router) {
    if (!databaseService.loaded) {
      router.navigate(["/loading"], { queryParams: { page: "/home" } });
    }
    this.trashToggle = false;
    this.selectionID = -1;
    this.booted = false;
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
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.booted = true;
    }, 100);
  }

  trashToggleInput(payload) {
    this.trashToggle = payload;
  }

  triggerEdit(event) {
    this.selectionID = event.id;
    localStorage.setItem("eventsDB", JSON.stringify(this.eventsDB));
  }

  editEvent(event) {
    this.pushToEventsDB();
    localStorage.removeItem("eventsDB");
  }

  cancelEdit() {
    this.eventsDB = JSON.parse(localStorage.getItem("eventsDB"));
    localStorage.removeItem("eventsDB");
  }

  checkEvent(event) {
    this.booted = true;
    event.checkedBy.push(this.loggedUser);
    event.going++;
    this.pushToEventsDB();
  }

  uncheckEvent(event) {
    let index = event.checkedBy.indexOf(this.loggedUser);
    event.checkedBy.splice(index, 1);
    event.going--;
    this.pushToEventsDB();
  }

  moveToTrash(event) {
    let index = event.checkedBy.indexOf(this.loggedUser);
    if (index > -1) {
      event.checkedBy.splice(index, 1);
      event.going--;
    }
    event.trashedBy.push(this.loggedUser);
    this.pushToEventsDB();
  }

  restoreEvent(event) {
    let index = event.trashedBy.indexOf(this.loggedUser);
    event.trashedBy.splice(index, 1);
    this.pushToEventsDB();
  }

  deleteEvent(event) {
    this.eventsDB.splice(event.id, 1);
    let i = 0;
    for (let event of this.eventsDB) {
      event.id = i;
      i++;
    }
    this.pushToEventsDB();
  }

  pushToEventsDB() {

    this.databaseService.SetEvents(this.eventsDB);
    this.databaseService.sendDB(null);
  }

  monthConversion(date) {
    var month = date.substring(5, 7);

    switch (month) {
      case "01":
        month = "GEN";
        break;
      case "02":
        month = "FEB";
        break;
      case "03":
        month = "MAR";
        break;
      case "04":
        month = "APR";
        break;
      case "05":
        month = "MAY";
        break;
      case "06":
        month = "JUN";
        break;
      case "07":
        month = "JUL";
        break;
      case "08":
        month = "AUG";
        break;
      case "09":
        month = "SEP";
        break;
      case "10":
        month = "OCT";
        break;
      case "11":
        month = "NOV";
        break;
      case "12":
        month = "DEC";
        break;
    }

    return month;
  }
}