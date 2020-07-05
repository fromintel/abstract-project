import { Component, OnInit } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AddProductFormComponent } from "src/app/components/add-product-form/add-product-form.component";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"]
})
export class ProductsPageComponent implements OnInit {
  public bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  public handleOpenAddProductForm(): void {
    this.bsModalRef = this.modalService.show(AddProductFormComponent);
  }
}
