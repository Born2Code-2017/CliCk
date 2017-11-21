import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.module';
import { Event } from '../event.module';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  @Input() usersDB: User[];
  @Input() eventsDB: Event[];
  public loggedUser: string;

  constructor() {
  }

  ngOnInit() {
    this.loggedUser = sessionStorage.getItem("loggedUser");
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
