import { TestBed, inject } from '@angular/core/testing';

import { TownService } from './town.service';

describe('TownServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TownService]
    });
  });

  it('should be created', inject([TownService], (service: TownService) => {
    expect(service).toBeTruthy();
  }));
});
