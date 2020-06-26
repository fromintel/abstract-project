import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent<T> {
  @Input() data: T[];

  constructor() {}
}
