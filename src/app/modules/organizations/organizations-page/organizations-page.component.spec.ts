import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { OrganizationsPageComponent } from './organizations-page.component';
import {OrganizationsTableComponent} from '../../../components/organizations-table/organizations-table.component';


describe('OrganizationsPageComponent', () => {
  let component: OrganizationsPageComponent;
  let fixture: ComponentFixture<OrganizationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrganizationsPageComponent,
        MockComponent(OrganizationsTableComponent),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
