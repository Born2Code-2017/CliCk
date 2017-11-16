import { Component } from '@angular/core';
import { Event } from './events-list.module';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  public eventsDB:Event[] = [];
  
  constructor() {
    this.eventsDB = [
      {
        owner_id: 1,
        date: "18/01/2017",
        time: "19:15",
        name: "Model Bootcamp",
        city: "Milan",
        address: "Garibaldi Street 38E",
        going: 153
      },
      {
        owner_id: 0,
        date: "27/01/2017",
        time: "22:00",
        name: "Gala Evening",
        city: "Florence",
        address: "Cavour Square 2A",
        going: 371
      },
      {
        owner_id: 2,
        date: "07/02/2017",
        time: "20:30",
        name: "Fashion Week",
        city: "Venice",
        address: "Spain Square 171C",
        going: 977
      },
      {
        owner_id: 4,
        date: "19/02/2017",
        time: "18:45",
        name: "Hair Styles Showreel",
        city: "Milan",
        address: "Alighieri Street 29D",
        going: 101
      },
      {
        owner_id: 3,
        date: "31/02/2017",
        time: "17:00",
        name: "Photo Gallery",
        city: "Rome",
        address: "Marsala Street 17B",
        going: 592
      },
      {
        owner_id: 4,
        date: "02/03/2017",
        time: "18:15",
        name: "Make-Up Exposès",
        city: "Milan",
        address: "Mazzini Street 22C",
        going: 76
      }
    ]
  }

  public newEvent(owner_id, date, time, name, city, address, going) {
    let event = {
      owner_id: owner_id,
      date: date,
      time: time,
      name: name,
      city: city,
      address: address,
      going: going
    }
    this.eventsDB.push(event);
  }
}
