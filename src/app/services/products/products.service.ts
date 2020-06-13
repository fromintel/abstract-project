import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class ProductsService {

  constructor() {}

  private productsList: Product[] = [
    {
      name: 'product 1',
      dateCreated: '11.06.20',
      dateModified: '12.06.20',
      status: 'available',
      productId: '123qwerty',
      orgId: '1234org',
      subscriptionId: '1234sub',
    },
    {
      name: 'product 2',
      dateCreated: '11.06.20',
      dateModified: '12.06.20',
      status: 'none',
      productId: '123qwerty123',
      orgId: '1234org',
      subscriptionId: '1234sub',
    },
    {
      name: 'product 3',
      dateCreated: '11.06.20',
      dateModified: '12.06.20',
      status: 'available',
      productId: '123qwerty321',
      orgId: '1234org',
      subscriptionId: '1234sub',
    }
  ];

  public getProducts(): Observable<Product[]> {
    return of<Product[]>(this.productsList).pipe(delay(500));
  }

  public getProductById(productId: string): Observable<Product> {
    const product: Product = this.productsList.find((product: Product) => productId === product.productId);
    return of<Product>(product).pipe(delay(700));
  }

  public addProduct(product: Product): Observable<Product[]> {
    const newProductList: Product[] = [...this.productsList];
    newProductList.push(product);
    this.productsList = [...newProductList];
    return of(this.productsList).pipe(delay(300));
  }

  public deleteProductById(productId: string): Observable<Product[]> {
    const newProductsList = this.productsList.filter((item: Product) => item.productId !== productId);
    this.productsList = [...newProductsList];
    return of(this.productsList).pipe(delay(600));
  }

  public editProductById(productId: string, editedData: Product): Observable<Product[]> {
    const productsList: Product[] = [...this.productsList];
    const selectedProductIndex = productsList.findIndex((product: Product) => product.productId === productId);
    productsList.splice(selectedProductIndex, 1, editedData);
    return of<Product[]>(productsList).pipe(
      tap(() => this.productsList = productsList),
      delay(700)
    );
  }

}
