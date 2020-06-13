import { Injectable } from '@angular/core';
import { Organization } from '../../models/organizations';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppStore } from '../../store/app-store';

@Injectable()
export class OrganizationsService {

  constructor() {}

  public getOrganizations(): Observable<Organization[]> {
    return of<Organization[]>(AppStore.storeEntity.organizations).pipe(delay(800));
  }

  public addOrg(org: Organization): Observable<Organization[]> {
    AppStore.storeEntity.organizations.push(org);
    return of<Organization[]>(AppStore.storeEntity.organizations).pipe(delay(300),);
  }

  public getOrganizationsBySubId(subId: string): Observable<Organization[]> {
    const organizations = AppStore.storeEntity.organizations.filter((org: Organization) => org.subId === subId);
    return of<Organization[]>(organizations).pipe(delay(500));
  }

}
