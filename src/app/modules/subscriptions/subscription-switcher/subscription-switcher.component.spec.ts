import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionSwitcherComponent } from './subscription-switcher.component';

describe('SubscriptionSwitcherComponent', () => {
  let component: SubscriptionSwitcherComponent;
  let fixture: ComponentFixture<SubscriptionSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
