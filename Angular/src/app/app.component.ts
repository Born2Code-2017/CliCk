import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Session Status: 0 => Not logged in // 1 => Logged in // 2 => Logged in + New event
  sessionStatus:string = "0";

  constructor() {
    let currentSession = sessionStorage.getItem("sessionStatus");
    if (currentSession !== null) {
      this.sessionStatus = currentSession;
    }
    console.log(this.sessionStatus);
  }
}
