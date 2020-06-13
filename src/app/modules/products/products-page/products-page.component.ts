import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject<void>();
  public products: Product[] = [];
  private selectedProduct: Product = null;
  public editProductForm: FormGroup;
  public addProductForm: FormGroup;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.initProducts();
    this.initEditProductForm();
    this.initAddProductForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // getting products
  private initProducts(): void {
    this.productsService.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      )
  }

  // adding products
  private initEditProductForm(): void {
    this.editProductForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    })
  }

  private initAddProductForm(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    })
  }

  // getting product by id
  public getId(id: string): void {
    this.productsService.getProductById(id)
      .subscribe((product: Product) => {
        console.log(product);
      })
  }

  // deleting product by id
  public removeById(productId: string): void {
    this.productsService.deleteProductById(productId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  // editing selected product
  public editProduct(product: Product): void {
    const updatedProduct = {
      ...product,
      name: this.editProductForm.get('name').value,
      status: this.editProductForm.get('status').value,
      dateModified: new Date().toDateString()
    };
    this.productsService.editProductById(product.productId, updatedProduct)
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: Product[]) => {
        this.products = products;
      })
  }

  public addProduct(): void {
    const newProduct: Product = {
      name: this.addProductForm.get('name').value,
      status: this.addProductForm.get('status').value,
      dateCreated: new Date().toDateString(),
      dateModified: new Date().toDateString(),
      productId: `f${(~~(Math.random()*1e8)).toString(16)}`,
      subscriptionId: `f${(~~(Math.random()*1e8)).toString(16)}`, // in this case need to chose subscription id,
      orgId: `f${(~~(Math.random()*1e8)).toString(16)}` // in this case need to chose organization id
    };
    this.productsService.addProduct(newProduct)
      .pipe(takeUntil(this.destroy$))
      .subscribe((products: Product[]) => {
        this.products = products;
      })
  }
}
