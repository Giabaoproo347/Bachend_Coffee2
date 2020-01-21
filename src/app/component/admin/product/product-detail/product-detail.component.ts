import {Component, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Product} from '../../../../model/product.model';
import {ShoppingCart} from '../../../../model/shopping-cart.model';
import {ProductService} from '../../../../service/product.service';
import {AppComponent} from '../../../../app.component';
import {ShoppingCartService} from '../../../../service/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;
  private cartSubscription: Subscription;
  public products: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private  app: AppComponent,
    private shoppingCartService: ShoppingCartService,
    private productsService: ProductService
  ) {
  }

  ngOnInit() {
    this.app.setIsShow(true);
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProduct(id).subscribe(
      next => {
        this.product = next;
        console.log(this.product);
      },
      error => {
        console.log(error);
        this.product = null;
      }
    );
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
    });
    this.products = this.productsService.getProductList();
  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
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


}
