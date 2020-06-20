import { Component, OnInit, Output } from '@angular/core';
import { OrganizationsService } from 'src/app/services/organizations/organizations.service';
import { Organization } from 'src/app/models/organizations';

@Component({
  selector: 'app-organizations-page',
  templateUrl: './organizations-page.component.html',
  styleUrls: ['./organizations-page.component.scss']
})
export class OrganizationsPageComponent implements OnInit {

  public organizations: Organization[];
  public isTrayActive: boolean;

  @Output() organization: Organization;

  constructor(private organizationService: OrganizationsService ) {
    this.organizations = [];
    this.isTrayActive = false;
   }

  ngOnInit(): void {
    this.organizationService.getAll().subscribe(organizations => {
      this.organizations = organizations;
    })

  }

  onClick(organization: Organization){
    this.isTrayActive = true;
    this.organization = organization;
  }
}
