import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";
import { AddProductFormComponent } from "./add-product-form.component";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { OrganizationsServiceStub } from "../../services/stubs/organization.service.stub";
import { OrganizationsService } from "src/app/services/organizations/organizations.service";
import { ProductsService } from "src/app/services/products/products.service";
import { ProductsServiceStub } from "src/app/services/stubs/products.service.stub";

describe("AddProductFormComponent", () => {
  let component: AddProductFormComponent;
  let fixture: ComponentFixture<AddProductFormComponent>;

  class BsModalServiceStub {}
  class BsModalRefStub {
    hide() {}
  }

  const MOCK_FORM: FormGroup = new FormGroup({
    productName: new FormControl("", Validators.required),
    organizationId: new FormControl("", Validators.required)
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: BsModalService,
          useClass: BsModalServiceStub
        },
        { provide: BsModalRef, useClass: BsModalRefStub },
        {
          provide: OrganizationsService,
          useClass: OrganizationsServiceStub
        },
        {
          provide: ProductsService,
          useClass: ProductsServiceStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductFormComponent);
    component = fixture.componentInstance;
    component.addProductForm = MOCK_FORM;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
