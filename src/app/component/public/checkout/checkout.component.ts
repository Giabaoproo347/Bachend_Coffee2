import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {CartItem} from '../../../model/cart-item.model';
import {Product} from '../../../model/product.model';
import {OrderDetail} from '../../../model/orderDetail.model';
import {ShoppingCart} from '../../../model/shopping-cart.model';
import {ProductService} from '../../../service/product.service';
import {OrderDetailService} from '../../../service/order-detail.service';
import {ShoppingCartService} from '../../../service/shopping-cart.service';

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public orderDetail: Observable<OrderDetail[]>;
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  public product: Product;

  private products: Product[];
  private cartSubscription: Subscription;

  public constructor(private productsService: ProductService,
                     private orderDetailService: OrderDetailService,
                     private shoppingCartService: ShoppingCartService) {
  }


  public setOrderDetail(option: OrderDetail): void {
    this.shoppingCartService.setOrderDetail(option);
  }

  public ngOnInit(): void {
    this.orderDetail = this.orderDetailService.getOrderDetailList();
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

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
        .get()
        .subscribe((cart) => {
          obs.next(cart.items.some((i) => i.productId === product.id));
          obs.complete();
        });
      sub.unsubscribe();
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
