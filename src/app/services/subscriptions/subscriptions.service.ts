import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppStore } from '../../store/app-store';
import { delay } from 'rxjs/operators';
import { ISubscription } from '../../models/subscription';

@Injectable()
export class SubscriptionsService {

  public getSubscriptions(): Observable<ISubscription[]> {
    return of<ISubscription[]>(AppStore.storeEntity.subscriptions).pipe(delay(800));
  }

  public getSubscriptionId(subId: string): Observable<ISubscription> {
    const sub = AppStore.storeEntity.subscriptions.find((sub: ISubscription) => sub.id === subId);
    return of<ISubscription>(sub).pipe(delay(500));
  }

}
