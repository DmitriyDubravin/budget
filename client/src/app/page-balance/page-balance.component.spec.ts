import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBalanceComponent } from './page-balance.component';

describe('PageBalanceComponent', () => {
  let component: PageBalanceComponent;
  let fixture: ComponentFixture<PageBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
