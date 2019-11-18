import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksDayComponent } from './checks-day.component';

describe('ChecksDayComponent', () => {
  let component: ChecksDayComponent;
  let fixture: ComponentFixture<ChecksDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecksDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecksDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
