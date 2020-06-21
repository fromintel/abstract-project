import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsPageComponent } from './organizations-page/organizations-page.component';
import { OrganizationsService } from '../../services/organizations/organizations.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationsTableComponent } from '../../components/organizations-table/organizations-table.component';
import { PreloaderComponent } from '../../components/preloader/preloader.component';

const routes: Routes = [{ path: '', component: OrganizationsPageComponent }];

@NgModule({
  declarations: [OrganizationsPageComponent, PreloaderComponent, OrganizationsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)],
  ],
  exports: [OrganizationsPageComponent],
  providers: [OrganizationsService]
})
export class OrganizationsModule {}
