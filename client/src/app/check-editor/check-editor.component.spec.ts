import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEditorComponent } from './check-editor.component';

describe('CheckEditorComponent', () => {
  let component: CheckEditorComponent;
  let fixture: ComponentFixture<CheckEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
