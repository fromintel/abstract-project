import { Component, OnInit, Input } from '@angular/core';
import { TableData } from 'src/app/models/table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableData: TableData[] =  [];
  
  constructor() {}

  ngOnInit() {}
}
