import { Pipe, PipeTransform, Input } from '@angular/core';
import { User } from '../user.module';

@Pipe({
    name: 'viewTrash',
    pure: false
})

export class ViewTrash implements PipeTransform {
    transform(eventsDB, usersDB, loggedUser) {
        let tempDB = [];

        for (let i = 0; i < eventsDB.length; i++) {
            if (eventsDB[i].trashedBy.indexOf(loggedUser) > -1) {
                tempDB.push(eventsDB[i]);
            }
        };

        return tempDB;
    }
}