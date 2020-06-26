import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.scss']
})
export class TrayComponent implements OnInit {
  @Input() data: any;
  @Output() onClose = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  ngOnInit(): void {

  }

  constructor() {
  }

  close(){
    debugger;
    this.onClose.emit(null)
  }

  delete(){
    debugger
    this.onDelete.emit(this.data.id)
  }

}
