import { Pipe, PipeTransform, Input } from '@angular/core';
import { User } from '../user.module';

@Pipe({
    name: 'hideTrash',
    pure: false
})

export class HideTrash implements PipeTransform {
    transform(eventsDB, usersDB) {
        let loggedUser = sessionStorage.getItem("loggedUser");
        loggedUser = usersDB.findIndex(x => x.hash === loggedUser).toString();
        let tempDB = [];

        for (let i = 0; i < eventsDB.length; i++) {
            if (eventsDB[i].trashedBy.indexOf(loggedUser) > -1) {
            }
            else {
                tempDB.push(eventsDB[i]);
            }
        };

        return tempDB;
    }
}