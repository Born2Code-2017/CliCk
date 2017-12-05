import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
    name: 'trashFilter',
    pure: false
})

export class TrashFilter implements PipeTransform {
    transform(eventsDB, usersDB, loggedUser, trashToggle) {
        let tempDB = [];

        for (let i = 0; i < eventsDB.length; i++) {
            if (eventsDB[i].trashedBy.indexOf(loggedUser) > -1 && trashToggle) {
                tempDB.push(eventsDB[i]);
            }
            else if (eventsDB[i].trashedBy.indexOf(loggedUser) === -1 && !trashToggle) {
                tempDB.push(eventsDB[i]);
            }
        };

        return tempDB;
    }
}