import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TableService } from './table.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.css']
})
export class TableGeneratorComponent implements OnInit {

  @Input() columns: any;
  @Input() url;
  @Input() actions: any[] = undefined;
  @Input() apiConfig = undefined;

  @ViewChild(ModalComponent)
  modal: ModalComponent;

  pagination = {
    itemsPerPage: 10,
    page: 1,
    totalItems: 0,
    orderBy: ''
  };
  rows = [];
  key = '';
  reverse = false;
  loading: boolean;
  actions_default = [
    { name: 'EDIT', class: 'btn btn-sm btn-info', context: this, method: 'editActionDefault' },
    { name: 'DELETE', class: 'btn btn-sm btn-danger', context: this, method: 'deleteActionDefault' },
  ];

  modalTitle = '';
  modalContent: any;
  modalButtonName = '';
  selectedRow;

  showMessageSuccess = false;
  message = '';

  constructor(private tablesService: TableService, private http: HttpClient) { }

  ngOnInit() {
    this.getRows(this.url, this.pagination);

    if (this.actions === undefined) {
      this.actions = this.actions_default;
    }

    this.tablesService.url = this.url;
  }

  getPage(page: number) {
    this.pagination.page = page;
    this.serverCallPagination(this.pagination);
  }

  sort(key: any) {
    if (this.reverse) {
      key = '';
    }
    this.key = key;
    this.reverse = !this.reverse;
    this.serverCallSort(key);
  }

  serverCallPagination($event: any) {
    this.getRows(this.url, $event);
  }

  serverCallSort($event: any) {
    this.pagination.orderBy = $event;
    this.getRows(this.url, this.pagination);
  }

  setLimit($event) {
    this.pagination.itemsPerPage = $event.target.value;
    this.getRows(this.url, this.pagination);
  }

  updateVariables(res) {
    this.rows = res['list'];
    this.pagination.page = res['paginator']['page']['current'];
    this.pagination.itemsPerPage = res['paginator']['limit'];
    this.pagination.totalItems = res['paginator']['total'];
  }

  updateVariablesApiConfig(res) {
    this.rows = this.parseObj(res, this.apiConfig['list']);
    this.pagination.page = this.parseObj(res, this.apiConfig['page']);
    this.pagination.itemsPerPage = this.parseObj(res, this.apiConfig['itemsPerPage']);
    this.pagination.totalItems = this.parseObj(res, this.apiConfig['totalItems']);
  }

  parseObj(res, conf) {
    const levels = conf.split('.');
    let _res = res;
    levels.forEach((element) => {
      _res = _res[element];
    });
    return _res;
  }

  callAction(context, method, row) {
    context[method](row);
  }

  editActionDefault(row) {
    this.modalButtonName = 'Salvar';
    this.modalTitle = 'Editar Registro';
    this.modalContent = '<p>Form aqui</p>';
    this.selectedRow = row;
    this.modal.show();
  }

  deleteActionDefault(row) {
    this.modalButtonName = 'Excluir';
    this.modalTitle = 'Excluir Registro';
    this.modalContent = '<p><b>Deseja Realmente excluir esse Registro ?</b></p>';
    this.selectedRow = row;
    this.modal.show();
  }

  getRows(url, pagination) {
    this.loading = true;
    this.tablesService.getRows(url, pagination).subscribe((res) => {
      if (this.apiConfig === undefined) {
        this.updateVariables(res);
      } else {
        this.updateVariablesApiConfig(res);
      }
    });
    this.loading = false;
  }

  setMessage($event) {
    this.getRows(this.url, this.pagination);
    this.showMessageSuccess = true;
    this.message = $event;
  }
}
