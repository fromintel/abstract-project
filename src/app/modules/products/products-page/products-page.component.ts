import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Product } from '../../../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public selectedProduct: Product = null;

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.initOrgsLoaded();
    this.initEditForm();
    this.initAddForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

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

  private initEditForm(): void {
    this.editProductForm = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  private initAddForm(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      orgId: new FormControl('', Validators.required),
    })
  }

  private editProduct(product: Product): void {
    const updatedProduct: Product = {
      ...product,
      name: this.editProductForm.get('name').value,
      dateModified: new Date().toDateString()
    };

    this.productsService.editProductById(product.id, updatedProduct, this.products)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Product[]) => {
        this.products = data;
        this.editProductForm.reset();
      })
  }

  private addProduct(): void {
    const newProduct: Product = {
      name: this.addProductForm.get('name').value,
      status: 'pending',
      id: `f${(~~(Math.random()*1e8)).toString(16)}`,
      orgId: this.addProductForm.get('orgId').value,
      subId: this.products[0].subId,
      dateCreated: new Date().toDateString(),
      dateModified: new Date().toDateString(),
    };

    this.productsService.addProduct(newProduct, this.products)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Product[]) => {
        this.products = data;
        this.addProductForm.reset();
      });
  }

  public removeProduct(product: Product, currentProductsList: Product[]): void {
    this.productsService.deleteProductById(product.id, currentProductsList)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Product[]) => {
        this.products = data;
      })
  }

}
