import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ShoppingCart} from '../../../model/shopping-cart.model';
import {CartItem} from '../../../model/cart-item.model';
import {Product} from '../../../model/product.model';
import {Payment} from '../../../model/payment.model';
import {User} from '../../../model/user.model';
import {ShoppingCartService} from '../../../service/shopping-cart.service';
import {ProductService} from '../../../service/product.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {PaymentService} from '../../../service/payment.service';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../../user/_services/user.service';

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent implements OnInit {
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  public isSuccess = false;
  isLoggedIn = false;
  payment: Payment;
  currentUser: User | any;
  private products: Product[];
  private cartSubscription: Subscription;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productsService: ProductService,
    private tokenStorageService: TokenStorageService,
    private paymentService: PaymentService,
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit() {
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
