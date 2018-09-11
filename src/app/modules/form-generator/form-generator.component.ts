import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QuestionBase } from './model/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from './services/question-control.service';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Output() callbackForm: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  _questions;

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this._questions = this.qcs.generateObjects(this.questions);
    this.form = this.qcs.toFormGroup(this._questions);
  }

  onSubmit() {
    this.callbackForm.emit(this.form.value);
  }

}
