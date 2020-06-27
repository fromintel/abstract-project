import { Injectable } from '@angular/core';
import { Organization } from '../../models/organizations';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppStore } from '../../store/app-store';
import * as uuid from 'uuid';

@Injectable()
export class OrganizationsService {

  constructor() {}

  public getOrganizations(): Observable<Organization[]> {
    return of<Organization[]>(AppStore.storeEntity.organizations).pipe(delay(800));
  }

  public addOrg(org: Organization): Observable<Organization[]> {
    const orgWithId = {
      ...org,
      id: uuid.v4(),
    }

    AppStore.storeEntity.organizations.push(orgWithId);

    return of<Organization[]>(AppStore.storeEntity.organizations).pipe(delay(300),);
  }

  public getOrganizationsByGroupId(groupId: string): Observable<Organization[]> {
    const organizations = AppStore.storeEntity.organizations.filter((org: Organization) => org.groupId === groupId);
    return of<Organization[]>(organizations).pipe(delay(500));
  }

}
