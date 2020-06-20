import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../products/products.service';


export class ProductsServiceStub extends ProductsService {

  public getAll(): Observable<Product[]> {
    return of([]);
  }

  public getByGroupId(id: string): Observable<Product[]> {
    return of([]);
  }

  public getByOrganizationId(id: string): Observable<Product[]> {
    return of([]);
  }

  public create(product: Product): Observable<void> {
    return of();
  }

  public edit(productId: string, editedData: Partial<Product>): Observable<void> {
		return of();
  }

  public delete(productId: string): Observable<void> {
		return of();
  }
}
