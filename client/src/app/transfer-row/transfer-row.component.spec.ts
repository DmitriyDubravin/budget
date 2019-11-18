import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRowComponent } from './transfer-row.component';

describe('TransferRowComponent', () => {
  let component: TransferRowComponent;
  let fixture: ComponentFixture<TransferRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
