import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Product } from '../../../models/product';
import { FormGroup } from '@angular/forms';
import { AppStore } from '../../../store/app-store';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject<void>();
  public products: Product[] = [];
  public editProductForm: FormGroup;
  public addProductForm: FormGroup;

  constructor(
    private productsService: ProductsService
  ) {}

  private initOrgsLoaded(): void {
    AppStore.getOrgState()
      .pipe(
        switchMap((orgId: string) => {
          return orgId === 'orgAll'
            ? this.productsService.getProducts()
            : this.productsService.getProductsByOrgId(orgId)
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((data: Product[]) => {
        this.products = data;
      })
  }

  ngOnInit(): void {
    this.initOrgsLoaded();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
