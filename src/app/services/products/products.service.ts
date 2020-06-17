import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AppStore } from '../../store/app-store';

@Injectable()
export class ProductsService {

  constructor() {}

  public getAll(): Observable<Product[]> {
    return of<Product[]>(AppStore.storeEntity.products).pipe(delay(800));
  }

  public getBySubscriptionId(id: string): Observable<Product[]> {
    const productsList = AppStore.storeEntity.products.filter((product: Product) => product.subId === id);
    return of<Product[]>(productsList).pipe(delay(300));
  }

  public getByOrganizationId(id: string): Observable<Product[]> {
    const productsList = AppStore.storeEntity.products.filter((product: Product) => product.orgId === id);
    return of<Product[]>(productsList).pipe(delay(300));
  }

  public create(product: Product): Observable<void> {
    AppStore.storeEntity.products.push(product);
    return of<void>().pipe(delay(300));
  }

  public edit(productId: string, editedData: Partial<Product>): Observable<void> {
    const products = AppStore.storeEntity.products;
    const selectedProductIndex = products.findIndex((product: Product) => product.id === productId);
    products.splice(selectedProductIndex, 1, {...products[selectedProductIndex], ...editedData});
    return of<void>().pipe(delay(700));
  }

  public delete(productId: string): Observable<void> {
    AppStore.storeEntity.products.filter((item: Product) => item.id !== productId);
    return of<void>().pipe(delay(600));
  }

}
