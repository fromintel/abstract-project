import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SubscriptionsService } from '../../../services/subscriptions/subscriptions.service';
import { takeUntil } from 'rxjs/operators';
import { ISubscription } from '../../../models/subscription';
import { AppStore } from '../../../store/app-store';

@Component({
  selector: 'app-subscription-switcher',
  templateUrl: './subscription-switcher.component.html',
  styleUrls: ['./subscription-switcher.component.scss']
})
export class SubscriptionSwitcherComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject<void>();
  public subscriptions: ISubscription[] = [];
  public selectedSub: ISubscription = null;

  constructor(
    private subscriptionsService: SubscriptionsService,
  ) { }

  ngOnInit() {
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initSubscriptions(): void {
    this.subscriptionsService.getSubscriptions()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: ISubscription[]) => {
        this.subscriptions = data;
        this.selectedSub = data[0];
        AppStore.setSubState(this.selectedSub.id)
      })
  }

  public onChangeSubscription(event: Event): void {
    const index = (event.target as HTMLSelectElement).options.selectedIndex;
    this.selectedSub = this.subscriptions[index];
    AppStore.setSubState(this.selectedSub.id);
  }
}
