import { TestBed } from '@angular/core/testing';

import { DialogSRVService } from './dialog-srv.service';

describe('DialogSRVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogSRVService = TestBed.get(DialogSRVService);
    expect(service).toBeTruthy();
  });
});
