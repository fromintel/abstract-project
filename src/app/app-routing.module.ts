import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "organizations",
    loadChildren: () =>
      import("./modules/organizations/organizations.module").then(
        m => m.OrganizationsModule
      )
  },
  {
    path: "products",
    loadChildren: () =>
      import("./modules/products/products.module").then(m => m.ProductsModule)
  },
  { path: "", redirectTo: "organizations", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
