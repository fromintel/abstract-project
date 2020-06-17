import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppStore } from '../../store/app-store';
import { delay } from 'rxjs/operators';
import { Subscription } from '../../models/subscription';

@Injectable()
export class SubscriptionsService {

  public getAll(): Observable<Subscription[]> {
    return of<Subscription[]>(AppStore.storeEntity.subscriptions).pipe(delay(800));
  }

  public getById(id: string): Observable<Subscription> {
    const subscription = AppStore.storeEntity.subscriptions.find((s: Subscription) => s.id === id);
    return of<Subscription>(subscription).pipe(delay(500));
  }

}
