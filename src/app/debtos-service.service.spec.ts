import { TestBed } from '@angular/core/testing';

import { DebtosServiceService } from './debtos-service.service';

describe('DebtosServiceService', () => {
  let service: DebtosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebtosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
