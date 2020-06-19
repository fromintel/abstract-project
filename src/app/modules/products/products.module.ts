import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { ProductsService } from "../../services/products/products.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "", component: ProductsPageComponent }];

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ProductsPageComponent],
  providers: [ProductsService]
})
export class ProductsModule {}
