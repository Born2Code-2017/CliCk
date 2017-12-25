import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(eventsDB, searchQuery) {
    let tempDB = [];
    for (let i = 0; i < eventsDB.length; i++) {
      if (eventsDB[i].name.toString().toLowerCase().includes(searchQuery.toString().toLowerCase())) {
        tempDB.push(eventsDB[i]);
      }
    }
    return tempDB;
  }

}
