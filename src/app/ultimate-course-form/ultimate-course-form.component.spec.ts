import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateCourseFormComponent } from './ultimate-course-form.component';

describe('UltimateCourseFormComponent', () => {
  let component: UltimateCourseFormComponent;
  let fixture: ComponentFixture<UltimateCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
