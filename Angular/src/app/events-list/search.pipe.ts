import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(eventsDB, searchQuery) {
    let tempDB = [];
    for (let i = 0; i < eventsDB.length; i++) {
      if (eventsDB[i].name.toLowerCase().includes(searchQuery.toLowerCase())) {
        tempDB.push(eventsDB[i]);
      }
    }
    return tempDB;
  }

}
