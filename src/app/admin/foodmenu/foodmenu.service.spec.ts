import { TestBed } from '@angular/core/testing';

import { FoodmenuService } from './foodmenu.service';

describe('FoodmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodmenuService = TestBed.get(FoodmenuService);
    expect(service).toBeTruthy();
  });
});
