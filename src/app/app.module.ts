import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PublicHeaderComponent} from './public-header/public-header.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StaffLoginComponent} from './staff-login/staff-login.component';
import {StaffHomeComponent} from './staff-home/staff-home.component';
import {StaffHeaderComponent} from './staff-header/staff-header.component';
import {ManageOrderComponent} from './manage-order/manage-order.component';
import {StaffFooterComponent} from './staff-footer/staff-footer.component';
import {StaffheaderFilesComponent} from './staffheader-files/staffheader-files.component';
import {ManageCartComponent} from './manage-cart/manage-cart.component';
import {StaffChangePasswordComponent} from './staff-change-password/staff-change-password.component';
import {AdminChangePasswordComponent} from './admin-change-password/admin-change-password.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {CategoriesComponent} from './categories/categories.component';
import {ManageProductsComponent} from './manage-products/manage-products.component';
import {ManageStaffComponent} from './manage-staff/manage-staff.component';
import {ManageStockComponent} from './manage-stock/manage-stock.component';
import {SubCategoriesComponent} from './sub-categories/sub-categories.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { CookedOrdersComponent } from './cooked-orders/cooked-orders.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    HomeComponent,
    AdminChangePasswordComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    CategoriesComponent,
    ManageProductsComponent,
    ManageStaffComponent,
    ManageStockComponent,
    SubCategoriesComponent,
    StaffLoginComponent,
    StaffHomeComponent,
    StaffHeaderComponent,
    ManageOrderComponent,
    StaffFooterComponent,
    StaffheaderFilesComponent,
    ManageCartComponent,
    StaffChangePasswordComponent,
    ViewOrdersComponent,
    PendingOrdersComponent,
    CookedOrdersComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
