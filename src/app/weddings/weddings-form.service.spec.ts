import { TestBed } from '@angular/core/testing';

import { WeddingsFormService } from './weddings-form.service';

describe('WeddingsFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeddingsFormService = TestBed.get(WeddingsFormService);
    expect(service).toBeTruthy();
  });
});
