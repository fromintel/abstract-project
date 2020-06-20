import { TestBed } from '@angular/core/testing';

import { OrganizationsService } from './organizations.service';
import { OrganizationsServiceStub } from '../stubs/organization.service.stub';

describe('OrganizationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({ 
    providers: [ 
      {
        provide: OrganizationsService,
        useClass: OrganizationsServiceStub
      }
    ] 
  }));

  it('should be created', () => {
    const service: OrganizationsService = TestBed.get(OrganizationsService);
    expect(service).toBeTruthy();
  });
});
