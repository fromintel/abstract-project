import { Observable, of } from 'rxjs';
import { Organization } from 'src/app/models/organizations';

export class OrganizationsServiceStub {

  public getAll(): Observable<Organization[]> {
    return of([]);
  }

  public create(organization: Organization): Observable<void> {
    return of();
  }

  public getByGroupId(id: string): Observable<Organization[]> {
    return of([]);
  }
}
