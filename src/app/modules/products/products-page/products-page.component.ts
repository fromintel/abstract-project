import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Subject, forkJoin, Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';
import { OrganizationsService } from 'src/app/services/organizations/organizations.service';
import { map, takeUntil } from 'rxjs/operators';
import { TableData } from 'src/app/models/table-data';
import { Organization } from 'src/app/models/organizations';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: TableData[] = [];
  unSubcription$: Subject<any> = new Subject<any>();

  constructor(
    private productsService: ProductsService,
    private orgService: OrganizationsService
  ) {}

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData(): void {
    const getAllProducts: Observable<Product[]> = this.productsService.getAll();
    const getAllOrganizations: Observable<Organization[]> = this.orgService.getAll();

    forkJoin([getAllProducts, getAllOrganizations])
      .pipe(
        map(dataArr => this.createProductsData(dataArr[0], dataArr[1])),
        takeUntil(this.unSubcription$)
      )
      .subscribe(data => {
        this.products = data;
      })
  }

  createProductsData(productsArr: Product[], organizationsArr: Organization[]): Array<TableData> {
    return productsArr.map(product => {
      return {
        name: product.name,
        status: product.status,
        organization: organizationsArr.find(organization => organization.id === product.orgId).name
      }
    });
  }

}
