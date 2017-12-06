import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { EventsListComponent } from './events-list/events-list.component';
import { NewEventComponent } from './new-event/new-event.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes =
    [{
        path: "", redirectTo: "/loading", pathMatch: "full"
    },
    {
        path: "loading", component: LoadingComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "home", component: EventsListComponent
    },
    {
        path: "new-event", component: NewEventComponent
    }];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class Routing { }