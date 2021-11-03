import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClTreasutyLoanComponent } from './cl-treasuty-loan.component';

describe('ClTreasutyLoanComponent', () => {
  let component: ClTreasutyLoanComponent;
  let fixture: ComponentFixture<ClTreasutyLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClTreasutyLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClTreasutyLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
