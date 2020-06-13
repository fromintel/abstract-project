import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AppStore } from '../../store/app-store';

@Injectable()
export class ProductsService {

  constructor() {}

  public getProducts(): Observable<Product[]> {
    return of<Product[]>(AppStore.storeEntity.products).pipe(delay(800));
  }

  public getProductsBySubId(subId: string): Observable<Product[]> {
    const productsList = AppStore.storeEntity.products.filter((product: Product) => product.subId === subId);
    return of<Product[]>(productsList).pipe(delay(300));
  }

  public getProductsByOrgId(orgId: string): Observable<Product[]> {
    const productsList = AppStore.storeEntity.products.filter((product: Product) => product.orgId === orgId);
    return of<Product[]>(productsList).pipe(delay(300));
  }

  public addProduct(product: Product): Observable<Product[]> {
    AppStore.storeEntity.products.push(product);
    return of<Product[]>(AppStore.storeEntity.products).pipe(delay(300));
  }

  public editProductById(productId: string, editedData: Product): Observable<Product[]> {
    const productsList: Product[] = AppStore.storeEntity.products;
    const selectedProductIndex = productsList.findIndex((product: Product) => product.id === productId);
    productsList.splice(selectedProductIndex, 1, editedData);
    return of<Product[]>(productsList).pipe(
      tap(() => AppStore.storeEntity.products = productsList),
      delay(700)
    );
  }

  public deleteProductById(productId: string): Observable<Product[]> {
    const newProductsList = AppStore.storeEntity.products.filter((item: Product) => item.id !== productId);
    AppStore.storeEntity.products = [...newProductsList];
    return of(AppStore.storeEntity.products).pipe(delay(600));
  }

}
