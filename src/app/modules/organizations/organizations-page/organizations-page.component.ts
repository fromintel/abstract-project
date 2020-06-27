<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddOrganizationFormComponent } from 'src/app/components/add-organization-form/add-organization-form.component';
=======
import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrganizationsService } from '../../../services/organizations/organizations.service';
import { Organization } from '../../../models/organizations';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { AppStore } from '../../../store/app-store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
>>>>>>> 9fac21feb852312debc4976fd4f4f05c7c57ecca

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
