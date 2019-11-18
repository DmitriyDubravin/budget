import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersTableComponent } from './transfers-table.component';

describe('TransfersTableComponent', () => {
  let component: TransfersTableComponent;
  let fixture: ComponentFixture<TransfersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
