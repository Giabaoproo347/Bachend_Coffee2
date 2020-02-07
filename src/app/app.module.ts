import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {authInterceptorProviders} from './user/_helpers/auth.interceptor';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {BoardAdminComponent} from './user/board-admin/board-admin.component';
import {BoardUserComponent} from './user/board-user/board-user.component';
import {BoardModeratorComponent} from './user/board-moderator/board-moderator.component';
import {ProfileComponent} from './user/profile/profile.component';

import {PaymentListComponent} from './component/admin/payment/payment-list/payment-list.component';
import {PaymentCreateComponent} from './component/admin/payment/payment-create/payment-create.component';
import {PaymentDeleteComponent} from './component/admin/payment/payment-delete/payment-delete.component';
import {PaymentDetailComponent} from './component/admin/payment/payment-detail/payment-detail.component';
import {PaymentEditComponent} from './component/admin/payment/payment-edit/payment-edit.component';
import {CategoriesDetailComponent} from './component/admin/categories/categories-detail/categories-detail.component';
import {OrderEditComponent} from './component/admin/order/order-edit/order-edit.component';
import {CategoriesEditComponent} from './component/admin/categories/categories-edit/categories-edit.component';
import {OrderDetailCreateComponent} from './component/admin/orderDetail/order-detail-create/order-detail-create.component';
import {CategoriesDeleteComponent} from './component/admin/categories/categories-delete/categories-delete.component';
import {OrderCreateComponent} from './component/admin/order/order-create/order-create.component';
import {OrderDetailDeleteComponent} from './component/admin/orderDetail/order-detail-delete/order-detail-delete.component';
import {OrderDeleteComponent} from './component/admin/order/order-delete/order-delete.component';
import {OrderListComponent} from './component/admin/order/order-list/order-list.component';
import {CategoriesListComponent} from './component/admin/categories/categories-list/categories-list.component';
import {OrderDetailEditComponent} from './component/admin/orderDetail/order-detail-edit/order-detail-edit.component';
import {OrderDetailComponent} from './component/admin/order/order-detail/order-detail.component';
import {OrderDetailDetailComponent} from './component/admin/orderDetail/order-detail-detail/order-detail-detail.component';
import {CategoriesCreateComponent} from './component/admin/categories/categories-create/categories-create.component';
import {OrderDetailListComponent} from './component/admin/orderDetail/order-detail-list/order-detail-list.component';
import {ProductListComponent} from './component/admin/product/product-list/product-list.component';
import {ProductCreateComponent} from './component/admin/product/product-create/product-create.component';
import {ProductDeleteComponent} from './component/admin/product/product-delete/product-delete.component';
import {ProductDetailComponent} from './component/admin/product/product-detail/product-detail.component';
import {ProductEditComponent} from './component/admin/product/product-edit/product-edit.component';
import {PromotionDetailComponent} from './component/admin/promotion/promotion-detail/promotion-detail.component';
import {ProductPictureDetailComponent} from './component/admin/productPicture/product-picture-detail/product-picture-detail.component';
import {PromotionDeleteComponent} from './component/admin/promotion/promotion-delete/promotion-delete.component';
import {PromotionEditComponent} from './component/admin/promotion/promotion-edit/promotion-edit.component';
import {ProductPictureCreateComponent} from './component/admin/productPicture/product-picture-create/product-picture-create.component';
import {PromotionListComponent} from './component/admin/promotion/promotion-list/promotion-list.component';
import {PromotionCreateComponent} from './component/admin/promotion/promotion-create/promotion-create.component';
import {ProductPictureEditComponent} from './component/admin/productPicture/product-picture-edit/product-picture-edit.component';
import {ProductPictureListComponent} from './component/admin/productPicture/product-picture-list/product-picture-list.component';
import {ProductPictureDeleteComponent} from './component/admin/productPicture/product-picture-delete/product-picture-delete.component';
import { FooterComponent } from './component/public/footer/footer.component';
import {HeaderComponent} from './component/public/header/header.component';
import { HomepageComponent } from './component/public/homepage/homepage.component';
import { CheckoutComponent } from './component/public/checkout/checkout.component';
import { ConfirmComponent } from './component/public/confirm/confirm.component';
import { FindByCategoryComponent } from './component/public/find-by-category/find-by-category.component';
import {FindByPromotionComponent} from './component/public/find-by-promotion/find-by-promotion.component';
import {ShoppingCartComponent} from './component/public/shopping-cart/shopping-cart.component';
import {StoreComponent} from './component/public/store/store.component';
import {ProductService} from './service/product.service';
import {OrderDetailService} from './service/order-detail.service';
import {StorageService} from './service/storage.service';
import {ShoppingCartService} from './service/shopping-cart.service';
import {AboutUsComponent} from './component/public/about-us/about-us.component';
import {BlogComponent} from './component/public/blog/blog.component';
import {PageNotFoundComponent} from './component/public/page-not-found/page-not-found.component';
import {UserCreateComponent} from './component/admin/user/user-create/user-create.component';
import {UserEditComponent} from './component/admin/user/user-edit/user-edit.component';
import {UserDeleteComponent} from './component/admin/user/user-delete/user-delete.component';
import {UserDetailComponent} from './component/admin/user/user-detail/user-detail.component';
import {UserListComponent} from './component/admin/user/user-list/user-list.component';
import {DiscountComponent} from './component/public/discount/discount.component';
import {BillPaymentComponent} from './component/public/bill-payment/bill-payment.component';
import {FilterByStatusPipe} from './model/filter';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ChangeProfileComponent } from './user/change-profile/change-profile.component';

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
    OrderDetailEditComponent,
    PaymentListComponent,
    PaymentCreateComponent,
    PaymentDeleteComponent,
    PaymentDetailComponent,
    PaymentEditComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductPictureCreateComponent,
    ProductPictureEditComponent,
    ProductPictureListComponent,
    ProductPictureDeleteComponent,
    ProductPictureDetailComponent,
    PromotionCreateComponent,
    PromotionEditComponent,
    PromotionDeleteComponent,
    PromotionDetailComponent,
    PromotionListComponent,
    HeaderComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    CheckoutComponent,
    ConfirmComponent,
    FindByCategoryComponent,
    FindByPromotionComponent,
    ShoppingCartComponent,
    StoreComponent,
    AboutUsComponent,
    BlogComponent,
    PageNotFoundComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserDetailComponent,
    UserListComponent,
    DiscountComponent,
    BillPaymentComponent,
    FilterByStatusPipe,
    ChangePasswordComponent,
    ChangeProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders,
    ProductService,
    OrderDetailService,
    StorageService, {
      provide: StorageService, useClass: StorageService
    }, {
      deps: [StorageService, ProductService, OrderDetailService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
