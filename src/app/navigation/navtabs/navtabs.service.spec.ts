import { TestBed } from '@angular/core/testing';

import { NavtabsService } from './navtabs.service';

describe('NavtabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavtabsService = TestBed.get(NavtabsService);
    expect(service).toBeTruthy();
  });
});
