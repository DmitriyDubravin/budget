import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChecksComponent } from './page-checks.component';

describe('PageChecksComponent', () => {
  let component: PageChecksComponent;
  let fixture: ComponentFixture<PageChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
