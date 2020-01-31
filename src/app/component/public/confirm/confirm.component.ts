import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../../service/shopping-cart.service';
import {Observable, Subscription} from 'rxjs';
import {OrderDetail} from '../../../model/orderDetail.model';
import {ShoppingCart} from '../../../model/shopping-cart.model';
import {Product} from '../../../model/product.model';
import {CartItem} from '../../../model/cart-item.model';
import {ProductService} from '../../../service/product.service';
import {OrderDetailService} from '../../../service/order-detail.service';
import {FormGroup} from '@angular/forms';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit {
  public orderDetail: Observable<OrderDetail[]>;
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  public isSuccess = false;
  public totalPrice: number;
  confirmForm: FormGroup;
  isLoggedIn = false;

  private products: Product[];
  private cartSubscription: Subscription;


  public constructor(private shoppingCartService: ShoppingCartService,
                     private productsService: ProductService,
                     private orderDetailService: OrderDetailService,
                     private tokenStorageService: TokenStorageService
  ) {
  }

  public ngOnInit(): void {
    if (!this.tokenStorageService.getToken()) {
      // this.isLoggedIn = !!this.tokenStorageService.getToken();
      // this.orderDetail = this.orderDetailService.getOrderDetailList();
      this.cart = this.shoppingCartService.get();
      this.cartSubscription = this.cart.subscribe((cart) => {
        this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
        this.productsService.getProductList().subscribe((products) => {
          this.products = products;
          this.cartItems = cart.items
            .map((item) => {
              const product = this.products.find((p) => p.id === item.productId);
              return {
                ...item,
                product,
                totalCost: product.price * item.quantity
              };
            });
        });
      });
    }


  }

  clickToPay() {
    this.shoppingCartService.empty();
    this.isSuccess = true;
  }


  // public ngOnDestroy(): void {
  //   if (this.cartSubscription) {
  //     this.cartSubscription.unsubscribe();
  //   }
  // }
}
