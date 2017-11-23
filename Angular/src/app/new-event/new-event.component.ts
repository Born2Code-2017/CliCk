import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event.module';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  @Input() eventsDB: Event[];

  event: Event;
  
  @Output() trashEventHide: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
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
    sessionStorage.setItem("sessionStatus", "1");
    this.event.owner_id = parseInt(sessionStorage.getItem('loggedUser'), 10);
    this.event.going = Math.floor((Math.random() * 1000) + 1);
    this.event.id = this.eventsDB.length;
  }

  createEvent(owner_id, date, time, name, city, address, going, description) {
    this.eventsDB.push(this.event);
    this.trashEventHide.emit(this.eventsDB);
    let request = this.http.put("https://click-e25d0.firebaseio.com/click/events.json/", JSON.stringify(this.eventsDB));
    request.subscribe(data => {
      location.reload();
    });
  }


}
