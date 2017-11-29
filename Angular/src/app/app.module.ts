import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NewEventComponent } from './new-event/new-event.component';
import { FooterComponent } from './footer/footer.component';
import { HideTrash } from './events-list/hide-trashed.pipe';
import { ViewTrash } from './events-list/view-trashed.pipe';

import { Routing } from './app.routing';
import { DatabaseService } from './database.service';


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
    HttpClientModule,
    Routing
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }