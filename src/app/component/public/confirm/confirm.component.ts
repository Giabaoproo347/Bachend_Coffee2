import {Component, OnInit} from '@angular/core';
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
import {UserService} from '../../../user/_services/user.service';
import {ActivatedRoute} from '@angular/router';
import {ExcelService} from '../../../service/excel.service';

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit {


  public constructor(private shoppingCartService: ShoppingCartService,
                     private productsService: ProductService,
                     private tokenStorageService: TokenStorageService,
                     private paymentService: PaymentService,
                     private fb: FormBuilder,
                     private route: ActivatedRoute,
                     private userService: UserService,
                     private excelService: ExcelService
  ) {
  }
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  public isSuccess = false;
  paymentForm: FormGroup;
  isLoggedIn = false;
  payment: Payment;
  method = ['Ship cod', 'Ví Momo', 'Vietcombank', 'Zalo Pay', 'Viettel Pay', 'VNQR pay'];
  currentDate = new Date();
  currentUser = this.tokenStorageService.getUser();


  private products: Product[];
  private cartSubscription: Subscription;

  data: any = [{
    Code: '954346',
    Phone: '0946098688',
    Address: 'Hà Nội',
    Email: 'tabach123@gmail.com',
    Total: 145000,
    Method: 'Ví Momo'
  }];
  private userId: string;

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
        id: [''],
        code: Math.floor(Math.random() * 1000000) + 1000,
        name: this.currentUser.username,
        address: this.currentUser.address,
        phone: this.currentUser.phone,
        email: this.currentUser.email,
        total: [''],
        description: [''],
        method: ['Ship cod'],
        date: this.currentDate,
        status: ['Đang chờ xử lý'],
        user: {
          id: this.tokenStorageService.getUser().id
        }
      });


    } else {
      this.paymentForm = this.fb.group({
        id: [''],
        code: Math.floor(Math.random() * 1000000) + 1000,
        name: ['', [Validators.required, Validators.minLength(3)]],
        address: ['', [Validators.required, Validators.minLength(3)]],
        phone: ['', [Validators.required]],
        email: [''],
        total: [''],
        description: [''],
        method: ['Ship cod'],
        date: this.currentDate,
        status: ['Đang chờ xử lý'],
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

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'Đơn hàng');
  }

}
