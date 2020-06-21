import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsPageComponent } from './organizations-page/organizations-page.component';
import { OrganizationsService } from '../../services/organizations/organizations.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PreloaderComponent } from '../../components/preloader/preloader.component';
import { AppTableComponent } from '../shared/app-table/app-table.component';

const routes: Routes = [{ path: '', component: OrganizationsPageComponent }];

@NgModule({
  declarations: [OrganizationsPageComponent, PreloaderComponent, AppTableComponent],
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
