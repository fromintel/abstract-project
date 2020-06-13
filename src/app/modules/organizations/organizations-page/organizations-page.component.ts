import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrganizationsService } from '../../../services/organizations/organizations.service';
import { Organization } from '../../../models/organizations';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { AppStore } from '../../../store/app-store';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organizations-page',
  templateUrl: './organizations-page.component.html',
  styleUrls: ['./organizations-page.component.scss']
})
export class OrganizationsPageComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject<void>();
  public organizations: Organization[] = [];
  public selectedOrganization: Organization = null;
  public addOrgForm: FormGroup;

  constructor(
    private orgsService: OrganizationsService,
  ) { }

  ngOnInit(): void {
    this.initSubscriptionsLoaded();
    this.initAddOrgForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initSubscriptionsLoaded(): void {
    AppStore.getSubState()
      .pipe(
        switchMap((subId: string) => {
          return subId === 'subAll'
            ? this.orgsService.getOrganizations()
            : this.orgsService.getOrganizationsBySubId(subId);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((data: Organization[]) => {
        this.organizations = data;
        this.selectedOrganization = data[0]; // in this case options are not updating after change subscription value
        AppStore.setOrgState(this.selectedOrganization.id);
      })
  }

  public selectOrganization(event: Event): void {
    const index = (event.target as HTMLSelectElement).options.selectedIndex;
    AppStore.setOrgState(this.organizations[index].id);
  }

  private initAddOrgForm(): void {
    this.addOrgForm = new FormGroup({
      name: new FormControl('', Validators.required),
      subId: new FormControl('', Validators.required)
    })
  }

  public addNewOrganization(): void {
    const newOrg: Organization = {
      id: `f${(~~(Math.random()*1e8)).toString(16)}`,
      subId: this.addOrgForm.get('name').value,
      name: this.addOrgForm.get('name').value,
      status: 'pending',
      dateCreated: new Date().toDateString(),
      dateModified: new Date().toDateString(),
    };
    console.log(newOrg);
    this.orgsService.addOrg(newOrg)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Organization[]) => {
        this.organizations = data;
        this.addOrgForm.reset();
      })
  }
}
