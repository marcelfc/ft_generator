import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { TableService } from '../../table.service';

declare const $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalTitle = '';
  @Input() modalContent = '';
  @Input() modalButtonName = '';
  @Input() row;
  @Output() sendMessage: EventEmitter<any> = new EventEmitter();
  constructor(private element: ElementRef, private tableService: TableService) { }

  ngOnInit() {
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

  callFunction() {
    this.tableService.destroy(this.row.id).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        alert(err);
      },
      () => {
        this.sendMessage.emit('Registro excluído com sucesso.');
      }
    );
    this.hide();
  }

}
