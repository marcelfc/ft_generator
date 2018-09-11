import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

interface IServerResponse {
  items: string[];
  total: number;
}

@Injectable()
export class TableService {

  url;
  constructor(private http: HttpClient) { }

  getRows(url, pagination) {
    return this.http.get(url + '?page=' +
     pagination.page + '&orderBy=' + pagination.orderBy + '&per_page=' + pagination.itemsPerPage);
  }

  destroy(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
