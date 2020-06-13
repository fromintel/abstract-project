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

  public addProduct(product: Product, currentProductList: Product[]): Observable<Product[]> {
    AppStore.storeEntity.products.push(product);
    const currentOrg = currentProductList[0].orgId;
    const isGlobalProductList = AppStore.storeEntity.products.length === currentProductList.length;
    return of<Product[]>(currentProductList).pipe(
      tap(() => {
        if (currentOrg === product.orgId && !isGlobalProductList) {
          currentProductList.push(product);
        }
      }),
      delay(300),
    );
  }

  public editProductById(productId: string, editedData: Product, currentProductsList: Product[]): Observable<Product[]> {
    const selectedProductIndex = currentProductsList.findIndex((product: Product) => product.id === productId);
    currentProductsList.splice(selectedProductIndex, 1, editedData);
    return of<Product[]>(currentProductsList).pipe(
      tap(() => AppStore.storeEntity.products.splice(selectedProductIndex, 1, editedData)),
      delay(700)
    );
  }

  public deleteProductById(productId: string, currentProductsList: Product[]): Observable<Product[]> {
    const newProductsList = currentProductsList.filter((item: Product) => item.id !== productId);
    return of<Product[]>(newProductsList).pipe(
      tap(() => AppStore.storeEntity.products = AppStore.storeEntity.products.filter((item: Product) => item.id !== productId)),
      delay(600)
    );
  }

}
