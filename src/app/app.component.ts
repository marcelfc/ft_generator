import { Component, OnInit } from '@angular/core';
import { DropdownQuestion } from './modules/form-generator/model/question-dropdown';
import { TextboxQuestion } from './modules/form-generator/model/question-textbox';
import { QuestionBase } from './modules/form-generator/model/question-base';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions: any;
  // tables
  // url = 'http://api-portal-pga.funceme.br/admin/instituicao';
  url = 'https://reqres.in/api/users';
  // columns = [
  //   { name: 'Sigla', key: 'sigla', sortable: false, type: 'text' },
  //   { name: 'Nome', key: 'nome', sortable: true, type: 'text' }
  // ];
  columns = [
    { name: 'First Name', key: 'first_name', sortable: false, type: 'text' },
    { name: 'Last Name', key: 'last_name', sortable: true, type: 'text' }
  ];

  actions = [
    { name: 'EDIT', class: 'btn btn-sm btn-info', context: this, method: 'editCallback'},
    { name: 'DELETE', class: 'btn btn-sm btn-danger', context: this, method: 'deleteCallback'},
  ];
  // end tables

  apiConfig = {
    itemsPerPage: 'per_page',
    page: 'page',
    totalItems: 'total',
    orderBy: '',
    list: 'data'
  };

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.questions = [
      {
        controlType: 'dropdown',
        key: 'categoria_id',
        label: 'Categoria',
        class: 'form-control',
        options: [
          { key: 'solid', value: 'Categoria 1' },
          { key: 'great', value: 'Categoria 2' },
          { key: 'good', value: 'Categoria 3' },
        ],
        order: 1,
      },

      {
        controlType: 'textbox',
        key: 'title',
        label: 'Título',
        value: '',
        class: 'form-control',
        required: true,
        order: 2
      },

    ];

  }

  sendForm($event: any) {
    console.log($event);
  }

  editCallback(row) {
    console.log('Edit Function');
    console.log(row);
  }

  deleteCallback(row) {
    console.log('Delete Function');
    console.log(row);
  }

}
