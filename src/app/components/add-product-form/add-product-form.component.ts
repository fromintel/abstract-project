import { Component, OnInit, OnDestroy } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Organization } from "src/app/models/organizations";
import { ProductsService } from "src/app/services/products/products.service";
import { OrganizationsService } from "src/app/services/organizations/organizations.service";
import { Product } from "src/app/models/product";
import { AddProductFormValue } from "src/app/models/addProductFormValue";

@Component({
  selector: "app-add-product-form",
  templateUrl: "./add-product-form.component.html",
  styleUrls: ["./add-product-form.component.scss"]
})
export class AddProductFormComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();
  public addProductForm: FormGroup;
  public organizations: Organization[] = [];

  constructor(
    public bsModalRef: BsModalRef,
    private productsService: ProductsService,
    private organizationsService: OrganizationsService
  ) {}

  ngOnInit(): void {
    this.initOrganizationsLoaded();
    this.initAddProductForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initOrganizationsLoaded(): void {
    this.organizationsService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((organizations: Organization[]) => {
        this.organizations = organizations;
      });
  }

  private initAddProductForm(): void {
    this.addProductForm = new FormGroup({
      productName: new FormControl("", Validators.required),
      organizationId: new FormControl("", Validators.required)
    });
  }

  private createNewProduct(addProductFormValues: AddProductFormValue): Product {
    const { productName, organizationId } = addProductFormValues;
    const newProduct: Product = {
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
      groupId: "e97a48eb-3fc3-4826-b638-dfb0b178eaaf",
      orgId: organizationId,
      name: productName,
      status: "available",
      dateCreated: new Date().toDateString(),
      dateModified: new Date().toDateString()
    };
    return newProduct;
  }

  private updateProductsInStore(newProduct: Product): void {
    this.productsService
      .create(newProduct)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  handleCloseForm(): void {
    this.bsModalRef.hide();
  }

  submit(): void {
    const formValues: AddProductFormValue = this.addProductForm.value;
    const newProduct: Product = this.createNewProduct(formValues);
    this.updateProductsInStore(newProduct);
  }
}
