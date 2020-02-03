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
import {ProductDetailComponent} from '../component/admin/product/product-detail/product-detail.component';
import {ProductCreateComponent} from '../component/admin/product/product-create/product-create.component';
import {ProductListComponent} from '../component/admin/product/product-list/product-list.component';
import {ProductEditComponent} from '../component/admin/product/product-edit/product-edit.component';
import {ProductDeleteComponent} from '../component/admin/product/product-delete/product-delete.component';
import {PromotionDetailComponent} from '../component/admin/promotion/promotion-detail/promotion-detail.component';
import {PromotionDeleteComponent} from '../component/admin/promotion/promotion-delete/promotion-delete.component';
import {PromotionEditComponent} from '../component/admin/promotion/promotion-edit/promotion-edit.component';
import {PromotionListComponent} from '../component/admin/promotion/promotion-list/promotion-list.component';
import {PromotionCreateComponent} from '../component/admin/promotion/promotion-create/promotion-create.component';
import {CheckoutComponent} from '../component/public/checkout/checkout.component';
import {ConfirmComponent} from '../component/public/confirm/confirm.component';
import {StoreComponent} from '../component/public/store/store.component';
import {ShoppingCartComponent} from '../component/public/shopping-cart/shopping-cart.component';
import {HomepageComponent} from '../component/public/homepage/homepage.component';
import {FindByCategoryComponent} from '../component/public/find-by-category/find-by-category.component';
import {FindByPromotionComponent} from '../component/public/find-by-promotion/find-by-promotion.component';
import {PageNotFoundComponent} from '../component/public/page-not-found/page-not-found.component';
import {AboutUsComponent} from '../component/public/about-us/about-us.component';
import {BlogComponent} from '../component/public/blog/blog.component';
import {UserListComponent} from '../component/admin/user/user-list/user-list.component';
import {UserCreateComponent} from '../component/admin/user/user-create/user-create.component';
import {UserEditComponent} from '../component/admin/user/user-edit/user-edit.component';
import {UserDeleteComponent} from '../component/admin/user/user-delete/user-delete.component';
import {UserDetailComponent} from '../component/admin/user/user-detail/user-detail.component';

import {DiscountComponent} from '../component/public/discount/discount.component';


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
  {path: 'payment-delete/:id', component: PaymentDeleteComponent},
  {path: 'payment-detail/:id', component: PaymentDetailComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-edit/:id', component: ProductEditComponent},
  {path: 'product-delete/:id', component: ProductDeleteComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: 'promotion-list', component: PromotionListComponent},
  {path: 'promotion-create', component: PromotionCreateComponent},
  {path: 'promotion-edit/:id', component: PromotionEditComponent},
  {path: 'promotion-delete/:id', component: PromotionDeleteComponent},
  {path: 'promotion-detail/:id', component: PromotionDetailComponent},
  {path: 'product-category/:id', component: FindByCategoryComponent},
  {path: 'product-promotion/:id', component: FindByPromotionComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-create', component: UserCreateComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'user-delete/:id', component: UserDeleteComponent},
  {path: 'user-detail/:id', component: UserDetailComponent},

  {path: 'contact', component: AboutUsComponent},
  {path: 'discount', component: DiscountComponent},

  {path: 'home', component: HomepageComponent},
  {
    path: 'checkout',
    component: CheckoutComponent
  }, {
    path: 'confirmed',
    component: ConfirmComponent
  }, {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'discount', component: DiscountComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
