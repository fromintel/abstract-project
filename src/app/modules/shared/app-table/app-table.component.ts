import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnChanges {

  @Input() data: <T>() => T[];
  isData = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.data.currentValue.length) {
      this.isData = false;
    }
  }
}
