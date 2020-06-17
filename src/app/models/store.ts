import { Organization } from './organizations';
import { Product } from './product';
import { Subscription } from './subscription';

export interface Store {
  subscriptions: Subscription[];
  organizations: Organization[];
  products: Product[];
}
