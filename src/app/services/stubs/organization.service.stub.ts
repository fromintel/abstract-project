import { Observable, of } from 'rxjs';
import { Organization } from 'src/app/models/organizations';
import { OrganizationsService } from '../organizations/organizations.service';


export class OrganizationsServiceStub extends OrganizationsService {

  constructor() {
    super();
  }

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