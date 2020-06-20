import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrganizationsPageComponent } from "./organizations-page/organizations-page.component";
import { OrganizationsService } from "../../services/organizations/organizations.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [{ path: "", component: OrganizationsPageComponent }];

@NgModule({
  declarations: [OrganizationsPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)],
    ModalModule.forRoot(),
  ],
  exports: [OrganizationsPageComponent],
  providers: [OrganizationsService]
})
export class OrganizationsModule {}
