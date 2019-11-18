import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePeriodComponent } from './page-period.component';

describe('PagePeriodComponent', () => {
  let component: PagePeriodComponent;
  let fixture: ComponentFixture<PagePeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
