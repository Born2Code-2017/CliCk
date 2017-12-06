import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NewEventComponent } from './new-event/new-event.component';
import { FooterComponent } from './footer/footer.component';
import { TrashFilter } from './events-list/trash-filter.pipe';

import { Routing } from './app.routing';
import { DatabaseService } from './database.service';
import { LoadingComponent } from './loading/loading.component';
import { ProgressDirective } from './progress.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    EventsListComponent,
    NewEventComponent,
    FooterComponent,
    LoadingComponent,
    ProgressDirective,
    TrashFilter
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }