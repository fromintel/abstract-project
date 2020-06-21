import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsPageComponent } from './organizations-page.component';
import {PreloaderComponent} from '../preloader/preloader.component';
import {OrganizationsService} from '../../../services/organizations/organizations.service';

describe('OrganizationsPageComponent', () => {
  let component: OrganizationsPageComponent;
  let fixture: ComponentFixture<OrganizationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsPageComponent, PreloaderComponent ],
      providers: [ OrganizationsService ]
    });

    fixture = TestBed.createComponent(OrganizationsPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
