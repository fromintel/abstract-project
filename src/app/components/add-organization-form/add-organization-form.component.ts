import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OrganizationsService } from "src/app/services/organizations/organizations.service";
import { GroupsService } from "src/app/services/groups/groups.service";
import { Organization } from "src/app/models/organizations";
import { Group } from "src/app/models/Group";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-add-organization-form",
  templateUrl: "./add-organization-form.component.html",
  styleUrls: ["./add-organization-form.component.scss"],
})
export class AddOrganizationFormComponent implements OnInit {
  constructor(
    public bsModalRef: BsModalRef,
    private organizationService: OrganizationsService,
    private groupsService: GroupsService
  ) {}

  public addOrganizationForm: FormGroup;
  public groups: Group[];
  private destroy$: Subject<void> = new Subject<void>();
  private isSubmitSuccess: Boolean;

  ngOnInit() {
    this.getGroups();
    this.initForms();
  }

  getGroups() {
    this.groupsService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((groups) => {
        this.groups = groups;
      });
  }

  initForms(): void {
    this.addOrganizationForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      groupId: new FormControl("", [Validators.required]),
    });
  }

  addOrganizationFormSubmit(): void {
    const newOrganization: Organization = {
      ...this.addOrganizationForm.value,
      id: "",
      status: "pending",
      dateCreated: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    };

    this.organizationService
    .addOrg(newOrganization)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      () => {
        this.isSubmitSuccess = true;
        setTimeout(() => {
          this.bsModalRef.hide()
          //TODO: add an emit to refresh organization table
          console.log(this.organizationService.getOrganizations())
        }, 3000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
