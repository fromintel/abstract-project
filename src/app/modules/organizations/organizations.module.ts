import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrganizationsPageComponent } from "./organizations-page/organizations-page.component";
import { AddOrganizationFormComponent } from '../../components/add-organization-form/add-organization-form.component';
import { OrganizationsService } from "../../services/organizations/organizations.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { TabsModule } from 'ngx-bootstrap';

const routes: Routes = [{ path: "", component: OrganizationsPageComponent }];

@NgModule({
  declarations: [
    OrganizationsPageComponent,
    AddOrganizationFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)],
    TabsModule.forRoot(),
  ],
  exports: [OrganizationsPageComponent],
  entryComponents: [AddOrganizationFormComponent],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
