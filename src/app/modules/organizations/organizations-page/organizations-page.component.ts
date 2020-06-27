import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddOrganizationFormComponent } from 'src/app/components/add-organization-form/add-organization-form.component';

@Component({
  selector: 'app-organizations-page',
  templateUrl: './organizations-page.component.html',
  styleUrls: ['./organizations-page.component.scss']
})
export class OrganizationsPageComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void { }

  openCreateOrganizationModal() {
    this.bsModalRef = this.modalService.show(AddOrganizationFormComponent);
  }
}
