import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {Product} from '../../../model/product.model';
import {ProductService} from '../../../service/product.service';
import {ShoppingCartService} from '../../../service/shopping-cart.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {
  public products: Observable<Product[]>;
  public product: Product;
  productList: Product[] = [];
  like: number;
  searchString: string;
  private content: any;
  isAdded: boolean;
  p = 1;

  public constructor(private productsService: ProductService,
                     private shoppingCartService: ShoppingCartService,
                     private route: ActivatedRoute,
                     private fb: FormBuilder) {
  }


  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
    this.isAdded = true;
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

  public ngOnInit(): void {
    this.productsService.getProductList().subscribe(next => {
        this.productList = next;
        console.log(this.productList);
      }, err =>
        (this.content = this.content = JSON.parse(err.error).message)
    );
  }
}
