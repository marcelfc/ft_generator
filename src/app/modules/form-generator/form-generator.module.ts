import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGeneratorComponent } from './form-generator.component';
import { FormGeneratorDynamicQuestionComponent } from './form-generator-dynamic-question/form-generator-dynamic-question.component';
import { QuestionControlService } from './services/question-control.service';
import { QuestionService } from './services/question.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ],
  declarations: [FormGeneratorComponent, FormGeneratorDynamicQuestionComponent],
  exports: [FormGeneratorComponent ],
  providers: [QuestionControlService, QuestionService],
})
export class FormGeneratorModule { }
