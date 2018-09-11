# FTGenerator

Geração de Formulários e Tabelas através de componentes Angular.

  - Compatíveis com as versões 4, 5 e 6 do Angular
  - Gerado utilizando o pacote ng-packagr

# Como instalar

```sh
$ npm install ftgenerator --save
```

# Como usar
No seu módulo importe a lib
```sh
import { FormGeneratorModule, TableGeneratorModule } from 'ftgenerator';

...

imports: [
    ...
    FormGeneratorModule,
    TableGeneratorModule
```
Após isso, no componente que será usado, use os componentes!
```sh
<app-form-generator [questions]="questions" (callbackForm)="sendForm($event)"></app-form-generator>
<app-table-generator [endpoint]="endpoint" [columns]="columns" [actions]="actions" [itemsPerPage]="itemsPerPage" [p]="page"></app-table-generator>
```
### Custonização e uso das variáveis

Para cada componente existe uma lista de variáveis que ajudam na customização de cada um.
    - FormGenerator  
| Propriedade | Descrição |
| ------ | ------ |
| questions | Array de objetos com os items do formulário |
| callbackForm | Função de retorno para onde os dados do formulário serão enviados |

Para a criação de items do formulário:
  - Crie objetos do seguinte tipo:
```sh
// criação de um dropdown
{
    controlType: 'dropdown',
    key: 'id',
    label: 'Label Title',
    class: 'class',
    options: [
      { key: 'solid', value: 'Option 1' },
      { key: 'great', value: 'Option 2' },
      { key: 'good', value: 'Option 3' },
    ],
    required: boolean
    order: 1,
},

// criação de um textbox
{
    controlType: 'textbox',
    key: 'id',
    label: 'Label Title',
    value: 'default value',
    class: 'class',
    required: boolean,
    order: 2
},

// criação de um checkbox
{
    controlType: 'checkbox',
    key: 'id',
    label: 'Label Title',
    class: 'class',
    required: boolean,
    options: [
      { key: 'name', value: 'value' }
    ],
    order: 3
},

// criação de um editor
{
    controlType: 'editor',
    key: 'id',
    label: 'Lable Title',
    value: '',
    class: 'class',
    required: boolean,
    order: 4
},
```
- TableGenerator  

| Propriedade | Descrição |
| ------ | ------ |
| rows | linhas a serem exibidas |
| columns | Lista de colunas |
| actions | Botões com ações a serem executadas |
| itemsPerPage | Quantos items deverão ser exibidos por página |
| p | Número da página para iniciar a tabela |

Como criar colunas e actions:
```sh
columns = [
    { name: 'col1', key: 'property-name', sortable: boolean, type: 'text' },
    { name: 'col2', key: 'property-name', sortable: boolean, type: 'text' },
    { name: 'col3', key: 'property-name', sortable: boolean, type: 'text' },
    { name: 'col4', key: 'property-name', sortable: boolean, type: 'link' },
  ];

  actions = [
    { name: 'BUTTON-NAME', class: 'btn btn-sm btn-info', callback: '/posts/edit' },
    { name: 'BUTTON-NAME', class: 'btn btn-sm btn-danger', callback: '/posts/delete' },
  ];
```

- As actions são geradas automaticamente, sem a necessidade de declara uma coluna para elas.
- Você precisa acoplar ao seu projeto o Bootstrap!.
