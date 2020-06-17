import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsSwitcherComponent } from './groups-switcher.component';

describe('GroupsSwitcherComponent', () => {
  let component: GroupsSwitcherComponent;
  let fixture: ComponentFixture<GroupsSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
