import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../user/login/login.component';
import {RegisterComponent} from '../user/register/register.component';
import {ProfileComponent} from '../user/profile/profile.component';
import {BoardAdminComponent} from '../user/board-admin/board-admin.component';
import {BoardUserComponent} from '../user/board-user/board-user.component';
import {BoardModeratorComponent} from '../user/board-moderator/board-moderator.component';
import {OrderEditComponent} from '../component/admin/order/order-edit/order-edit.component';
import {OrderDetailCreateComponent} from '../component/admin/orderDetail/order-detail-create/order-detail-create.component';
import {OrderDetailEditComponent} from '../component/admin/orderDetail/order-detail-edit/order-detail-edit.component';
import {OrderDetailComponent} from '../component/admin/order/order-detail/order-detail.component';
import {OrderCreateComponent} from '../component/admin/order/order-create/order-create.component';
import {OrderDetailDetailComponent} from '../component/admin/orderDetail/order-detail-detail/order-detail-detail.component';
import {OrderDetailDeleteComponent} from '../component/admin/orderDetail/order-detail-delete/order-detail-delete.component';
import {OrderDeleteComponent} from '../component/admin/order/order-delete/order-delete.component';
import {OrderDetailListComponent} from '../component/admin/orderDetail/order-detail-list/order-detail-list.component';
import {CategoriesDetailComponent} from '../component/admin/categories/categories-detail/categories-detail.component';
import {OrderListComponent} from '../component/admin/order/order-list/order-list.component';
import {CategoriesListComponent} from '../component/admin/categories/categories-list/categories-list.component';
import {CategoriesEditComponent} from '../component/admin/categories/categories-edit/categories-edit.component';
import {CategoriesDeleteComponent} from '../component/admin/categories/categories-delete/categories-delete.component';
import {CategoriesCreateComponent} from '../component/admin/categories/categories-create/categories-create.component';
import {PaymentCreateComponent} from '../component/admin/payment/payment-create/payment-create.component';
import {PaymentEditComponent} from '../component/admin/payment/payment-edit/payment-edit.component';
import {PaymentDetailComponent} from '../component/admin/payment/payment-detail/payment-detail.component';
import {PaymentListComponent} from '../component/admin/payment/payment-list/payment-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'categories-list', component: CategoriesListComponent},
  {path: 'categories-create', component: CategoriesCreateComponent},
  {path: 'categories-edit/:id', component: CategoriesEditComponent},
  {path: 'categories-delete/:id', component: CategoriesDeleteComponent},
  {path: 'categories-detail/:id', component: CategoriesDetailComponent},
  {path: 'order-list', component: OrderListComponent},
  {path: 'order-create', component: OrderCreateComponent},
  {path: 'order-edit/:id', component: OrderEditComponent},
  {path: 'order-delete/:id', component: OrderDeleteComponent},
  {path: 'order-detail/:id', component: OrderDetailComponent},
  {path: 'orderDetail-list', component: OrderDetailListComponent},
  {path: 'orderDetail-create', component: OrderDetailCreateComponent},
  {path: 'orderDetail-edit/:id', component: OrderDetailEditComponent},
  {path: 'orderDetail-delete/:id', component: OrderDetailDeleteComponent},
  {path: 'orderDetail-detail/:id', component: OrderDetailDetailComponent},
  {path: 'payment-list', component: PaymentListComponent},
  {path: 'payment-create', component: PaymentCreateComponent},
  {path: 'payment-edit/:id', component: PaymentEditComponent},
  {path: 'payment-delete/:id', component: PaymentDetailComponent},
  {path: 'payment-detail/:id', component: PaymentDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
