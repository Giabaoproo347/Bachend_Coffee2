import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoriesListComponent} from './component/admin/categories/categories-list/categories-list.component';
import {CategoriesCreateComponent} from './component/admin/categories/categories-create/categories-create.component';
import {CategoriesDeleteComponent} from './component/admin/categories/categories-delete/categories-delete.component';
import {CategoriesDetailComponent} from './component/admin/categories/categories-detail/categories-detail.component';
import {CategoriesEditComponent} from './component/admin/categories/categories-edit/categories-edit.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {authInterceptorProviders} from './user/_helpers/auth.interceptor';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {BoardAdminComponent} from './user/board-admin/board-admin.component';
import {BoardUserComponent} from './user/board-user/board-user.component';
import {BoardModeratorComponent} from './user/board-moderator/board-moderator.component';
import {ProfileComponent} from './user/profile/profile.component';
import {OrderListComponent} from './component/admin/order/order-list/order-list.component';
import {OrderCreateComponent} from './component/admin/order/order-create/order-create.component';
import {OrderDeleteComponent} from './component/admin/order/order-delete/order-delete.component';
import {OrderDetailComponent} from './component/admin/order/order-detail/order-detail.component';
import {OrderEditComponent} from './component/admin/order/order-edit/order-edit.component';
import {OrderDetailListComponent} from './component/admin/orderDetail/order-detail-list/order-detail-list.component';
import {OrderDetailCreateComponent} from './component/admin/orderDetail/order-detail-create/order-detail-create.component';
import {OrderDetailDeleteComponent} from './component/admin/orderDetail/order-detail-delete/order-detail-delete.component';
import {OrderDetailDetailComponent} from './component/admin/orderDetail/order-detail-detail/order-detail-detail.component';
import {OrderDetailEditComponent} from './component/admin/orderDetail/order-detail-edit/order-detail-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    CategoriesListComponent,
    CategoriesCreateComponent,
    CategoriesDeleteComponent,
    CategoriesDetailComponent,
    CategoriesEditComponent,
    OrderListComponent,
    OrderCreateComponent,
    OrderDeleteComponent,
    OrderDetailComponent,
    OrderEditComponent,
    OrderDetailListComponent,
    OrderDetailCreateComponent,
    OrderDetailDeleteComponent,
    OrderDetailDetailComponent,
    OrderDetailEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
