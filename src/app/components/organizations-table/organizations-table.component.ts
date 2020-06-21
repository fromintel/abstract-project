import {Component, OnInit} from '@angular/core';
import {Organization} from '../../models/organizations';
import {Observable} from 'rxjs';
import {OrganizationsService} from '../../services/organizations/organizations.service';

@Component({
  selector: 'app-organizations-table',
  templateUrl: './organizations-table.component.html',
  styleUrls: ['./organizations-table.component.scss']
})
export class OrganizationsTableComponent implements OnInit {

  organizations$: Observable<Organization[]>;

  constructor(private organizationsService: OrganizationsService) { }

  ngOnInit(): void {
    this.organizations$ = this.organizationsService.getAll();
  }
}
