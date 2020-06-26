import { Component, OnInit, Output, OnDestroy } from "@angular/core";
import { OrganizationsService } from "src/app/services/organizations/organizations.service";
import { Organization } from "src/app/models/organizations";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TrayData } from "src/app/shared/components/tray/tray.component";

@Component({
  selector: "app-organizations-page",
  templateUrl: "./organizations-page.component.html",
  styleUrls: ["./organizations-page.component.scss"],
})
export class OrganizationsPageComponent implements OnInit, OnDestroy {
  public organizations: Organization[];
  public isTrayActive: boolean;

  private destroy$: Subject<void> = new Subject<void>();

  @Output() organization: Organization;

  constructor(private organizationService: OrganizationsService) {
    this.organizations = [];
    this.isTrayActive = false;
  }

  ngOnInit(): void {
    this.organizationService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((organizations) => {
        this.organizations = organizations;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onOpenTray(organization: Organization) {
    this.isTrayActive = true;
    this.organization = organization;
  }

  public onCloseTray() {
    this.isTrayActive = false;
  }

  public onDeleteOrganization(id: string) {
    const index = this.organizations.findIndex((org) => org.id === id);
    if (index != -1) {
      this.organizations.splice(index, 1);
    }
    this.isTrayActive = false;
  }

  mapOrganizationToTrayData(organization: Organization) {
    const trayData = {
      id: organization.id,
      name: organization.name,
      status: organization.status,
      label: "Organization",
    } as TrayData;
    return trayData;
  }
}
