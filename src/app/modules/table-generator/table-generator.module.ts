import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGeneratorComponent } from './table-generator.component';
import { TableService } from './table.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  declarations: [TableGeneratorComponent, ModalComponent, AlertComponent],
  providers: [TableService],
  exports: [TableGeneratorComponent]
})
export class TableGeneratorModule { }
