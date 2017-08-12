import { TestBed, inject } from '@angular/core/testing';

import { CribService } from './crib.service';

describe('CribService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CribService]
    });
  });

  it('should be created', inject([CribService], (service: CribService) => {
    expect(service).toBeTruthy();
  }));
});
