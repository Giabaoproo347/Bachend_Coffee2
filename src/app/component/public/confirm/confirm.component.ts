import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../../service/shopping-cart.service';
import {Observable, Subscription} from 'rxjs';
import {OrderDetail} from '../../../model/orderDetail.model';
import {ShoppingCart} from '../../../model/shopping-cart.model';
import {Product} from '../../../model/product.model';
import {CartItem} from '../../../model/cart-item.model';
import {ProductService} from '../../../service/product.service';
import {OrderDetailService} from '../../../service/order-detail.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {PaymentService} from '../../../service/payment.service';
import {Payment} from '../../../model/payment.model';

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit {
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  public isSuccess = false;
  paymentForm: FormGroup;
  isLoggedIn = false;
  payment: Payment;
  currentDate = new Date();

  private products: Product[];
  private cartSubscription: Subscription;


  public constructor(private shoppingCartService: ShoppingCartService,
                     private productsService: ProductService,
                     private tokenStorageService: TokenStorageService,
                     private paymentService: PaymentService,
                     private fb: FormBuilder
  ) {
  }

  public ngOnInit(): void {
    if (!this.tokenStorageService.getToken()) {
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
      this.paymentForm = this.fb.group({
        id: '',
        name: ['', [Validators.required, Validators.minLength(1)]],
        address: ['', [Validators.required, Validators.minLength(1)]],
        phone: ['', [Validators.required, Validators.minLength(1)]],
        email: [''],
        total: [''],
        description: [''],
        date: this.currentDate,
        status: ['Đang chờ xử lý']
      });
    }
  }

  clickToPay() {
    if (this.paymentForm.valid) {
      const {value} = this.paymentForm;
      this.payment = value;
      this.paymentService.createPayment(this.payment).subscribe(
        next => {
          console.log(next);
          this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
    this.shoppingCartService.empty();
    this.isSuccess = true;
  }
}
