import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StaffLoginComponent} from './staff-login/staff-login.component';
import {StaffHomeComponent} from './staff-home/staff-home.component';
import {ManageOrderComponent} from './manage-order/manage-order.component';
import {ManageCartComponent} from './manage-cart/manage-cart.component';
import {StaffChangePasswordComponent} from './staff-change-password/staff-change-password.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminChangePasswordComponent} from './admin-change-password/admin-change-password.component';
import {CategoriesComponent} from './categories/categories.component';
import {SubCategoriesComponent} from './sub-categories/sub-categories.component';
import {ManageProductsComponent} from './manage-products/manage-products.component';
import {ManageStaffComponent} from './manage-staff/manage-staff.component';
import {ManageStockComponent} from './manage-stock/manage-stock.component';
import {ViewOrdersComponent} from './view-orders/view-orders.component';
import {PendingOrdersComponent} from './pending-orders/pending-orders.component';
import {CookedOrdersComponent} from './cooked-orders/cooked-orders.component';
import {PaymentComponent} from './payment/payment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adminLogin', component: AdminLoginComponent},
  {path: 'adminHome', component: AdminHomeComponent},
  {path: 'adminHome/adminChangePassword', component: AdminChangePasswordComponent},
  {path: 'adminHome/categories', component: CategoriesComponent},
  {path: 'adminHome/subcategories', component: SubCategoriesComponent},
  {path: 'adminHome/manageproducts', component: ManageProductsComponent},
  {path: 'adminHome/managestaff', component: ManageStaffComponent},
  {path: 'adminHome/managestock/:productid', component: ManageStockComponent},
  {path: 'staffLogin', component: StaffLoginComponent},
  {path: 'staffHome', component: StaffHomeComponent},
  {path: 'staffHome/staffChangePassword', component: StaffChangePasswordComponent},
  {path: 'staffHome/Menu', component: ManageOrderComponent},
  {path: 'staffHome/vieworder', component: ViewOrdersComponent},
  {path: 'staffHome/pendingorders', component: PendingOrdersComponent},
  {path: 'staffHome/cookedorders', component: CookedOrdersComponent},
  {path: 'staffHome/payment', component: PaymentComponent},
  {path: 'staffHome/Menu/Cart', component: ManageCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
