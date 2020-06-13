import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsPageComponent } from './organizations-page/organizations-page.component';
import { OrganizationsService } from '../../services/organizations/organizations.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [OrganizationsPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    OrganizationsPageComponent
  ],
  providers: [
    OrganizationsService
  ]
})
export class OrganizationsModule { }
