import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrganizationsPageComponent } from "./organizations-page/organizations-page.component";
import { OrganizationsService } from "../../services/organizations/organizations.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { TrayComponent } from './tray/tray.component';

const routes: Routes = [{ path: "", component: OrganizationsPageComponent }];

@NgModule({
  declarations: [OrganizationsPageComponent, TrayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [OrganizationsPageComponent],
  providers: [OrganizationsService]
})
export class OrganizationsModule {}
