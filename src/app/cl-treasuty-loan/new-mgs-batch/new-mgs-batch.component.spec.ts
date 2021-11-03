import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMgsBatchComponent } from './new-mgs-batch.component';

describe('NewMgsBatchComponent', () => {
  let component: NewMgsBatchComponent;
  let fixture: ComponentFixture<NewMgsBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMgsBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMgsBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
