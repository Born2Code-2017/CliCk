import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

export const firebaseConfig = {
  apiKey: "AIzaSyALesUjo1v9tHLPTnFgCSIwyefq2fErp9k",
  authDomain: "click-e25d0.firebaseapp.com",
  databaseURL: "https://click-e25d0.firebaseio.com",
  projectId: "click-e25d0",
  storageBucket: "click-e25d0.appspot.com",
  messagingSenderId: "248278094476"
};

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NewEventComponent } from './new-event/new-event.component';
import { FooterComponent } from './footer/footer.component';
import { HideTrash } from './events-list/hide-trashed.pipe';
import { ViewTrash } from './events-list/view-trashed.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    EventsListComponent,
    NewEventComponent,
    FooterComponent,
    HideTrash,
    ViewTrash
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }