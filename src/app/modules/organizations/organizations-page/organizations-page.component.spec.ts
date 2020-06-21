import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { OrganizationsPageComponent } from './organizations-page.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { OrganizationsServiceStub } from '../../../services/stubs/organization.service.stub';
import {OrganizationsService} from '../../../services/organizations/organizations.service';

describe('OrganizationsPageComponent', () => {
  let component: OrganizationsPageComponent;
  let fixture: ComponentFixture<OrganizationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrganizationsPageComponent,
        MockComponent(PreloaderComponent) ],
      providers: [ {
        provide: OrganizationsService,
        useClass: OrganizationsServiceStub
      } ]
    });

    fixture = TestBed.createComponent(OrganizationsPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
