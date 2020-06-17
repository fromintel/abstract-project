import { Organization } from './organizations';
import { Product } from './product';
import { Group } from './group';

export interface Store {
  groups: Group[];
  organizations: Organization[];
  products: Product[];
}
