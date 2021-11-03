import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMgsSingleComponent } from './new-mgs-single.component';

describe('NewMgsSingleComponent', () => {
  let component: NewMgsSingleComponent;
  let fixture: ComponentFixture<NewMgsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMgsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMgsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
