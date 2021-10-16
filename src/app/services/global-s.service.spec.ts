import { TestBed } from '@angular/core/testing';

import { GlobalSService } from './global-s.service';

describe('GlobalSService', () => {
  let service: GlobalSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
