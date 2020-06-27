import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationFormComponent } from './add-organization-form.component';

describe('AddOrganizationFormComponent', () => {
  let component: AddOrganizationFormComponent;
  let fixture: ComponentFixture<AddOrganizationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
