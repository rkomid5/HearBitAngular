import { TestBed } from '@angular/core/testing';

import { MaperService } from './maper.service';

describe('MaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaperService = TestBed.get(MaperService);
    expect(service).toBeTruthy();
  });
});
