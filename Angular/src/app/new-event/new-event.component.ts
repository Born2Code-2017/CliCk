import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event.module';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  @Input() eventsDB: Event[];
  event: Event;

  constructor(private db: AngularFireDatabase) {
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
    this.event.owner_id = parseInt(sessionStorage.getItem('loggedUser'), 10);
    this.event.going = Math.floor((Math.random() * 1000) + 1);
   }

   createEvent(owner_id, date, time, name, city, address, going, description) {
     this.db.database.ref('events/' + this.eventsDB.length).set(this.event);
   }


}
