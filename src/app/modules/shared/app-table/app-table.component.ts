import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Organization} from '../../../models/organizations';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit {

  @Input() data: Observable<Organization[]>;
  @Input() itemName: string;

  constructor() { }

  ngOnInit(): void {}
}
