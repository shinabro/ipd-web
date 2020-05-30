import { TestBed } from '@angular/core/testing';

import { CityStateServiceService } from './city-state-service.service';

describe('CityStateServiceService', () => {
  let service: CityStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
