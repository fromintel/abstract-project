import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'src/app/models/organizations';

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.scss']
})
export class TrayComponent implements OnInit {

  @Input() organization: Organization;

  constructor() { }

  ngOnInit() {
    debugger;
    this.organization
  }

}
