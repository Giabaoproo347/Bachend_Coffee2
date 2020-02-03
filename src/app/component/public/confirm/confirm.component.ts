import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../../service/shopping-cart.service';
import {Observable, Subscription} from 'rxjs';
import {ShoppingCart} from '../../../model/shopping-cart.model';
import {Product} from '../../../model/product.model';
import {CartItem} from '../../../model/cart-item.model';
import {ProductService} from '../../../service/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {PaymentService} from '../../../service/payment.service';
import {Payment} from '../../../model/payment.model';
import {AppComponent} from '../../../app.component';
import {User} from '../../../model/user.model';
<<<<<<< HEAD
=======
import {UserService} from '../../../user/_services/user.service';
import {ActivatedRoute} from '@angular/router';
>>>>>>> master

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
  userForm: FormGroup;
  isLoggedIn = false;
  payment: Payment;
  method = ['Ship cod', 'Ví Momo', 'Vietcombank', 'Zalo Pay', 'Viettel Pay', 'VNQR pay'];
  currentDate = new Date();
<<<<<<< HEAD
  currentUser: User | any;
  address: any[] = ['Vĩnh Phúc', 'Hà Nội', 'Bắc Ninh', 'Tuyên Quang', 'Bắc Ninh', 'Cao Bằng'];
=======
  currentUser = this.tokenStorageService.getUser();

>>>>>>> master

  private products: Product[];
  private cartSubscription: Subscription;


  public constructor(private shoppingCartService: ShoppingCartService,
                     private productsService: ProductService,
                     private tokenStorageService: TokenStorageService,
                     private paymentService: PaymentService,
                     private fb: FormBuilder,
<<<<<<< HEAD
                     private app: AppComponent
=======
                     private route: ActivatedRoute,
                     private userService: UserService
>>>>>>> master
  ) {
  }

  public ngOnInit(): void {
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
<<<<<<< HEAD
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorageService.getUser();
      this.paymentForm = this.fb.group({
        id: [''],
        name: this.currentUser.username,
        address: this.currentUser.address,
        phone: this.currentUser.phone,
=======
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.paymentService.getPayment(id).subscribe(
      next => {
        this.payment = next;
        console.log(this.payment);
        // this.paymentForm.patchValue(this.payment);
        // console.log(this.paymentForm);
      },
      error => {
        console.log(error);
        this.payment = null;
      }
    );
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.paymentForm = this.fb.group({
        id: [''] ,
        code: Math.floor(Math.random() * 1000000) + 1000 ,
        name: this.currentUser.username,
        address: ['Hà Nội'],
        phone: ['0964908688'],
>>>>>>> master
        email: this.currentUser.email,
        total: [''],
        description: [''],
        method: ['Ship cod'],
        date: this.currentDate,
        status: ['Đang chờ xử lý']
      });


    } else {
      this.paymentForm = this.fb.group({
        id: [''] ,
        code: Math.floor(Math.random() * 1000000) + 1000 ,
        name: ['', [Validators.required, Validators.minLength(1)]],
        address: ['', [Validators.required, Validators.minLength(1)]],
        phone: ['', [Validators.required, Validators.minLength(1)]],
        email: [''],
        total: [''],
        description: [''],
        method: ['Ship cod'],
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
