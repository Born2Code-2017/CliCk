import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
    name: 'filterTrashed'
})

export class TrashFilter implements PipeTransform {
    trashToggle: boolean = false;

    transform(eventsDB) {
        let loggedUser = sessionStorage.getItem("loggedUser");
        let tempDB = [];

        console.log(this.trashToggle);
        if (this.trashToggle === false) {
            for (let i = 0; i < eventsDB.length; i++) {
                if (eventsDB[i].trashedBy.indexOf(loggedUser) > -1) {
                }
                else {
                    tempDB.push(eventsDB[i]);
                }
            };
            this.trashToggle = true;
        }
        else if (this.trashToggle === true) {
            for (let i = 0; i < eventsDB.length; i++) {
                if (eventsDB[i].trashedBy.indexOf(loggedUser) > -1) {
                    tempDB.push(eventsDB[i]);
                }
            };
            this.trashToggle = false;
        }

        return tempDB;
    }
}