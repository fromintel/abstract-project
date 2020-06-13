import { Injectable } from '@angular/core';
import { Organization } from '../../models/organizations';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppStore } from '../../store/app-store';

@Injectable()
export class OrganizationsService {

  constructor() {}

  public getOrganizations(): Observable<Organization[]> {
    console.log('all orgs');
    return of<Organization[]>(AppStore.storeEntity.organizations).pipe(delay(800));
  }

  public getOrganizationsBySubId(subId: string): Observable<Organization[]> {
    console.log('orgs by subId');
    const organizations = AppStore.storeEntity.organizations.filter((org: Organization) => org.subId === subId);
    return of<Organization[]>(organizations).pipe(delay(500));
  }

}
