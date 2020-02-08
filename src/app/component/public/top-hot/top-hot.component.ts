import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product.model';
import {ProductService} from '../../../service/product.service';
import {AppComponent} from '../../../app.component';
import {Observable, Observer} from 'rxjs';
import {ShoppingCartService} from '../../../service/shopping-cart.service';

@Component({
  selector: 'app-top-hot',
  templateUrl: './top-hot.component.html',
  styleUrls: ['./top-hot.component.css']
})
export class TopHotComponent implements OnInit {

  productList: Product[] = [];
  content: string;

  constructor(private productService: ProductService,
              private app: AppComponent,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.app.setIsShow(true);
    this.productService.getProductList().subscribe(next =>
      (this.productList = next), err =>
      (this.content = this.content = JSON.parse(err.error).message));
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
