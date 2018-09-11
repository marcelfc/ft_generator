import { Injectable } from '@angular/core';
import { QuestionBase } from '../model/question-base';
import { DropdownQuestion } from '../model/question-dropdown';
import { TextboxQuestion } from '../model/question-textbox';

@Injectable()
export class QuestionService {

    constructor() { }

    getQuestions() {

        let questions: QuestionBase<any>[] = [

            new DropdownQuestion({
                key: 'brave',
                label: 'Select 1',
                options: [
                    { key: 'key1', value: 'default1' },
                    { key: 'key2', value: 'default1' },
                    { key: 'key3', value: 'default2' },
                    { key: 'key4', value: 'default2' }
                ],
                order: 3
            }),

            new DropdownQuestion({
                key: 'brave-depend',
                label: 'Select 2',
                options: [
                    { key: 'key1', value: 'default11' },
                    { key: 'key2', value: 'default11' },
                    { key: 'key3', value: 'default21' },
                    { key: 'key4', value: 'default21' }
                ],
                order: 4
            }),

            new TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Default Require',
                required: true,
                order: 1
            }),

            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }

}
