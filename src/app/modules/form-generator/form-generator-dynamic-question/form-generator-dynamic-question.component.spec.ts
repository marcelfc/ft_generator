import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneratorDynamicQuestionComponent } from './form-generator-dynamic-question.component';

describe('FormGeneratorDynamicQuestionComponent', () => {
  let component: FormGeneratorDynamicQuestionComponent;
  let fixture: ComponentFixture<FormGeneratorDynamicQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeneratorDynamicQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneratorDynamicQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
