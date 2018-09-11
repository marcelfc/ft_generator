import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../model/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-generator-dynamic-question',
  templateUrl: './form-generator-dynamic-question.component.html',
  styleUrls: ['./form-generator-dynamic-question.component.css']
})
export class FormGeneratorDynamicQuestionComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
