import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { User } from '../user.module';
import { Event } from '../event.module';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  @Input() usersDB: User[];
  @Input() eventsDB: Event[];
  @Input() trashToggle: boolean;
  public loggedUser: string;

  @Output() trashEventOutput: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loggedUser = sessionStorage.getItem("loggedUser");
  }

  moveToTrash(event) {
    event.trashedBy.push(this.loggedUser);
    this.pushToEventsDB();
  }

  restoreEvent(event) {
    let index = event.trashedBy.indexOf(this.loggedUser);
    event.trashedBy.splice(index, 1);
    this.pushToEventsDB();
  }

  deleteEvent(event) {
    console.log("hey");
    this.eventsDB.splice(event.id, 1);
    let i = 0;
    for (let event of this.eventsDB) {
      event.id = i;
      i++;
    }
    this.pushToEventsDB();
  }

  pushToEventsDB() {
    this.trashEventOutput.emit(this.eventsDB);
    let request = this.http.put("https://click-e25d0.firebaseio.com/click/events.json/", JSON.stringify(this.eventsDB));
    request.subscribe();
  }

  monthConversion(date) {
    var month = date.substring(3, 5);

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