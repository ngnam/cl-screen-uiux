import { TestBed, inject } from '@angular/core/testing';

import { ClTreasutyLoanService } from './cl-treasuty-loan.service';

describe('ClTreasutyLoanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClTreasutyLoanService]
    });
  });

  it('should be created', inject([ClTreasutyLoanService], (service: ClTreasutyLoanService) => {
    expect(service).toBeTruthy();
  }));
});
