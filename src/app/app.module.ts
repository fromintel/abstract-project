import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { GroupsService } from './services/groups/groups.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { GroupsSwitcherComponent } from './modules/groups/groups-switcher/groups-switcher.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ModalModule } from 'ngx-bootstrap';
import { AddOrganizationFormComponent } from './components/add-organization-form/add-organization-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsSwitcherComponent,
    SidebarComponent,
    NavigationComponent,
    AddOrganizationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    OrganizationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  entryComponents: [AddOrganizationFormComponent],
  providers: [GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
