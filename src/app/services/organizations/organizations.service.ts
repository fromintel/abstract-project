import { Injectable } from '@angular/core';
import { Organization } from '../../models/organizations';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppStore } from '../../store/app-store';
import * as uuid from 'uuid';

@Injectable()
export class OrganizationsService {

  constructor() {}

  public getAll(): Observable<Organization[]> {
    return of<Organization[]>(AppStore.storeEntity.organizations).pipe(delay(800));
  }

  public create(organization: Organization): Observable<string> {
    const organizationWithId = {
      ...organization,
      id: uuid.v4(),
    }

    AppStore.storeEntity.organizations.push(organizationWithId);
    return of<string>('success').pipe(delay(300));
  }

  public getByGroupId(id: string): Observable<Organization[]> {
    const organizations = AppStore.storeEntity.organizations.filter((org: Organization) => org.groupId === id);
    return of<Organization[]>(organizations).pipe(delay(500));
  }

}
