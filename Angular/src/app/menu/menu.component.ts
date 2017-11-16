import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public logOut() {
    sessionStorage.setItem("sessionStatus", "0");
    location.reload();
  }

  constructor() {

  }

}
