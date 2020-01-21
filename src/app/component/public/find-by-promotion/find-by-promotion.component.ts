import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product.model';
import {Observable, Observer} from 'rxjs';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShoppingCartService} from '../../../service/shopping-cart.service';
import {Promotion} from '../../../model/promotion.model';
import {PromotionService} from '../../../service/promotion.service';

@Component({
  selector: 'app-product-promotion',
  templateUrl: './find-by-promotion.component.html',
  styleUrls: ['./find-by-promotion.component.css']
})
export class FindByPromotionComponent implements OnInit {

  productListPromotion: Product[];
  promotion: Promotion;
  public products: Observable<Product[]>;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private promotionService: PromotionService,
              private shoppingCartService: ShoppingCartService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.id;
      this.promotionService.getPromotion(id).subscribe(nextPromotion => {
        this.promotion = nextPromotion;
        this.productService.getProductListByPromotion(id).subscribe(next => {
          this.productListPromotion = next;
        }, error => (console.log(error)));
      }, errorPromotion => {
        console.log(errorPromotion);
      });
    });

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
