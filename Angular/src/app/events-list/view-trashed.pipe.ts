import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
    name: 'viewTrash',
    pure: false
})

export class ViewTrash implements PipeTransform {
    transform(eventsDB) {
        let loggedUser = sessionStorage.getItem("loggedUser");
        let tempDB = [];

        for (let i = 0; i < eventsDB.length; i++) {
            if (eventsDB[i].trashedBy.indexOf(loggedUser) > -1) {
                tempDB.push(eventsDB[i]);
            }
        };

        return tempDB;
    }
}