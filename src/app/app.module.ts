import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { GroupsService } from './services/groups/groups.service';
import { FormsModule } from '@angular/forms';
import { GroupsSwitcherComponent } from './modules/groups/groups-switcher/groups-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    OrganizationsModule,
    FormsModule
  ],
  providers: [GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
