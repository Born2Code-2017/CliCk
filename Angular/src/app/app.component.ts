import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FilterService]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}