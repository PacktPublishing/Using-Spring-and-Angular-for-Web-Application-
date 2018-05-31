import { TestBed, inject } from '@angular/core/testing';

import { DeactivateGuardService } from './deactivate-guard.service';

describe('DeactivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateGuardService]
    });
  });

  it('should ...', inject([DeactivateGuardService], (service: DeactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
