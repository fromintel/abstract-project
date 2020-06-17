import { Injectable } from '@angular/core';
import { Organization } from '../../models/organizations';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppStore } from '../../store/app-store';

@Injectable()
export class OrganizationsService {

  constructor() {}

  public getAll(): Observable<Organization[]> {
    return of<Organization[]>(AppStore.storeEntity.organizations).pipe(delay(800));
  }

  public create(organization: Organization): Observable<Organization[]> {
    AppStore.storeEntity.organizations.push(organization);
    return of<Organization[]>(AppStore.storeEntity.organizations).pipe(delay(300),);
  }

  public getBySubscriptionId(id: string): Observable<Organization[]> {
    const organizations = AppStore.storeEntity.organizations.filter((org: Organization) => org.subId === id);
    return of<Organization[]>(organizations).pipe(delay(500));
  }

}
