import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { SubscriptionSwitcherComponent } from './modules/subscriptions/subscription-switcher/subscription-switcher.component';
import { SubscriptionsService } from './services/subscriptions/subscriptions.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    OrganizationsModule,
    FormsModule
  ],
  providers: [SubscriptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
