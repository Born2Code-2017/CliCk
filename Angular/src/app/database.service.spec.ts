import { TestBed, inject } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseService]
    });
  });

  it('should be created', inject([DatabaseService], (service: DatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
