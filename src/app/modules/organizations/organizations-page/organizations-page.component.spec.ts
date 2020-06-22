import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { OrganizationsPageComponent } from './organizations-page.component';
import {AppTableComponent} from '../../shared/app-table/app-table.component';
import {OrganizationsService} from '../../../services/organizations/organizations.service';
import {OrganizationsServiceStub} from '../../../services/stubs/organization.service.stub';
import {PreloaderComponent} from '../../shared/preloader/preloader.component';


describe('OrganizationsPageComponent', () => {
  let component: OrganizationsPageComponent;
  let fixture: ComponentFixture<OrganizationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrganizationsPageComponent,
        MockComponent(AppTableComponent),
        MockComponent(PreloaderComponent)
      ],
      providers: [ {
        provide: OrganizationsService,
        useClass: OrganizationsServiceStub
      } ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
