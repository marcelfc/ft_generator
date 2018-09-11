import { Injectable } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './../model/question-base';
import { DropdownQuestion } from '../model/question-dropdown';
import { TextboxQuestion } from '../model/question-textbox';
import { CheckboxQuestion } from '../model/question-checkbox';
import { EditorQuestion } from '../model/question-editor';

@Injectable()
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  generateObjects(questions) {
    let response_questions: QuestionBase<any>[];
    let obj_questions = [];
    for (let q of questions) {
      switch (q.controlType) {
        case 'dropdown':
          obj_questions.push(new DropdownQuestion(q));
          break;
        case 'textbox':
          obj_questions.push(new TextboxQuestion(q));
          break;
        case 'checkbox':
          obj_questions.push(new CheckboxQuestion(q));
          break;
        case 'editor':
          obj_questions.push(new EditorQuestion(q));
          break;
        default:
          console.log('Question type' + q.controlType + 'invalid!');
      }

    }
    response_questions = obj_questions;
    return response_questions;
  }

}
