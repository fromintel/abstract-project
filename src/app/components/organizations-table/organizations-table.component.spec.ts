import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { OrganizationsTableComponent } from './organizations-table.component';
import {PreloaderComponent} from '../preloader/preloader.component';
import {OrganizationsService} from '../../services/organizations/organizations.service';
import {OrganizationsServiceStub} from '../../services/stubs/organization.service.stub';

describe('OrganizationsTableComponent', () => {
  let component: OrganizationsTableComponent;
  let fixture: ComponentFixture<OrganizationsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrganizationsTableComponent,
        MockComponent( PreloaderComponent ),
      ],
      providers: [ {
        provide: OrganizationsService,
        useClass: OrganizationsServiceStub
      } ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
