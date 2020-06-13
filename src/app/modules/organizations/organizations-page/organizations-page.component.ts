import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrganizationsService } from '../../../services/organizations/organizations.service';
import { Organization } from '../../../models/organizations';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { AppStore } from '../../../store/app-store';

@Component({
  selector: 'app-organizations-page',
  templateUrl: './organizations-page.component.html',
  styleUrls: ['./organizations-page.component.scss']
})
export class OrganizationsPageComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject<void>();
  public organizations: Organization[] = [];
  public selectedOrganization: Organization = null;

  constructor(
    private orgsService: OrganizationsService,
  ) { }

  ngOnInit(): void {
    this.initSubscriptionsLoaded();
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

  selectOrganization(event: Event) {
    const index = (event.target as HTMLSelectElement).options.selectedIndex;
    AppStore.setOrgState(this.organizations[index].id);
  }
}
