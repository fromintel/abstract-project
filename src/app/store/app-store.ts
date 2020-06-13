import { Store } from '../models/store';
import { Observable, Subject } from 'rxjs';

export class AppStore {
  private static store: Store = {
    subscriptions: [
      {
        id: 'subAll',
        name: 'All subscriptions'
      },
      {
        id: 'sub1',
        name: 'subscription1'
      },
      {
        id: 'sub2',
        name: 'subscription2'
      },
    ],
    organizations: [
      {
        id: 'orgAll',
        subId: 'subAll',
        name: 'All organization',
        status: 'pending',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'org1',
        subId: 'sub1',
        name: 'organization 1',
        status: 'pending',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'org2',
        subId: 'sub2',
        name: 'organization 2',
        status: 'pending',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'org3',
        subId: 'sub2',
        name: 'organization 3',
        status: 'pending',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'org4',
        subId: 'sub1',
        name: 'organization 4',
        status: 'pending',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'org5',
        subId: 'sub1',
        name: 'organization 5',
        status: 'pending',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      }
    ],
    products: [
      {
        id: 'prd1',
        subId: 'sub1',
        orgId: 'org1',
        name: 'product 1',
        status: 'available',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'prd2',
        subId: 'sub1',
        orgId: 'org4',
        name: 'product 2',
        status: 'available',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'prd3',
        subId: 'sub4',
        orgId: 'org1',
        name: 'product 3',
        status: 'available',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'prd4',
        subId: 'sub2',
        orgId: 'org2',
        name: 'product 4',
        status: 'available',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'prd5',
        subId: 'sub1',
        orgId: 'org5',
        name: 'product 5',
        status: 'available',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'prd6',
        subId: 'sub1',
        orgId: 'org5',
        name: 'product 6',
        status: 'available',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'prd7',
        subId: 'sub2',
        orgId: 'org3',
        name: 'product 7',
        status: 'available',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'prd8',
        subId: 'sub1',
        orgId: 'org5',
        name: 'product 8',
        status: 'available',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      },
      {
        id: 'prd9',
        subId: 'sub1',
        orgId: 'org4',
        name: 'product 9',
        status: 'available',
        dateCreated: '11.06.20',
        dateModified: '12.06.20',
      }
    ]
  };
  private static subState: Subject<string> = new Subject<string>();
  private static orgState: Subject<string> = new Subject<string>();

  public static get storeEntity(): Store {
    return this.store;
  }

  public static setSubState(newState: string): void {
    this.subState.next(newState);
  }

  public static getSubState(): Observable<string> {
    return this.subState.asObservable();
  }

  public static setOrgState(newState: string): void {
    this.orgState.next(newState);
  }

  public static getOrgState(): Observable<string> {
    return this.orgState.asObservable();
  }
}
