import { Organization } from './organizations';
import { Product } from './product';
import { ISubscription } from './subscription';

export interface Store {
  subscriptions: ISubscription[];
  organizations: Organization[];
  products: Product[];
}
