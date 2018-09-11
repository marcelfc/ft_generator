import { QuestionBase } from './question-base';

export class EditorQuestion extends QuestionBase<string> {
  controlType = 'editor';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
