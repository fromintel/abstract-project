import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsPageComponent } from './organizations-page/organizations-page.component';
import { OrganizationsService } from '../../services/organizations/organizations.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [OrganizationsPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OrganizationsPageComponent
  ],
  providers: [
    OrganizationsService
  ]
})
export class OrganizationsModule { }
