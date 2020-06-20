import { Component, OnInit, Output } from "@angular/core";
import { OrganizationsService } from "src/app/services/organizations/organizations.service";
import { Organization } from "src/app/models/organizations";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-organizations-page",
  templateUrl: "./organizations-page.component.html",
  styleUrls: ["./organizations-page.component.scss"],
})
export class OrganizationsPageComponent implements OnInit {
  public organizations: Organization[];
  public isTrayActive: boolean;

  @Output() organization: Organization;

  constructor(private organizationService: OrganizationsService) {
    this.organizations = [];
    this.isTrayActive = false;
  }

  ngOnInit(): void {
    this.organizationService.getAll().subscribe((organizations) => {
      this.organizations = organizations;
    });
  }

  onOpenTray(organization: Organization) {
    this.isTrayActive = true;
    this.organization = organization;
  }

 
  public onCloseTray() {
    debugger;
    this.isTrayActive = false;
  }

  public onDeleteOrganization(id: string){
    debugger;
    const index = this.organizations.findIndex(org => org.id === id)
    if(index != -1){
      this.organizations.splice(index, 1)
    }
    this.isTrayActive = false;
  }
}
