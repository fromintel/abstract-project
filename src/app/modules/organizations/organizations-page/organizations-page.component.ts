import { Component, OnInit } from '@angular/core';
import {OrganizationsService} from '../../../services/organizations/organizations.service';
import {Observable} from 'rxjs';
import {Organization} from '../../../models/organizations';

@Component({
  selector: 'app-organizations-page',
  templateUrl: './organizations-page.component.html',
  styleUrls: ['./organizations-page.component.scss']
})
export class OrganizationsPageComponent implements OnInit {
  organizations$: Observable<Organization[]>;

  constructor(private organizationsService: OrganizationsService) { }

  ngOnInit(): void {
    this.organizations$ = this.organizationsService.getAll();
  }
}
