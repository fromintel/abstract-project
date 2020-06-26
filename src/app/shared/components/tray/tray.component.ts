import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tray",
  templateUrl: "./tray.component.html",
  styleUrls: ["./tray.component.scss"],
})
export class TrayComponent implements OnInit {
  @Input() data: TrayData;
  @Output() onClose: EventEmitter<null>;
  @Output() onDelete: EventEmitter<string>;

  ngOnInit(): void {}

  constructor() {
    this.onClose = new EventEmitter();
    this.onDelete = new EventEmitter();
  }

  close() {
    this.onClose.emit(null);
  }

  delete() {
    this.onDelete.emit(this.data.id);
  }
}

export interface TrayData {
  id: string;
  name: string;
  status: string;
  label: string;
}
