import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

  private searchQuery: string;
  private trashToggle: boolean;

  constructor() {
    this.searchQuery = "";
    this.trashToggle = false;
  }

  public getSearchQuery() {
    return this.searchQuery;
  }

  public getTrashToggle() {
    return this.trashToggle;
  }

  public setSearchQuery(value) {
    this.searchQuery = value;
  }

  public setTrashToggle() {
    this.trashToggle = !this.trashToggle;
  }

}
