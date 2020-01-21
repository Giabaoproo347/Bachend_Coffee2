import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product.model';
import {ProductService} from '../../../service/product.service';
import {AppComponent} from '../../../app.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Observer} from 'rxjs';
import {ShoppingCartService} from '../../../service/shopping-cart.service';
import {Categories} from '../../../model/categories.model';
import {CategoriesService} from '../../../service/categories.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './find-by-category.component.html',
  styleUrls: ['./find-by-category.component.css']
})
export class FindByCategoryComponent implements OnInit {

  productListByCategory: Product[];
  categories: Categories;
  public products: Observable<Product[]>;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private categoriesService: CategoriesService,
              private shoppingCartService: ShoppingCartService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.id;
      this.categoriesService.getCategories(id).subscribe(nextCategory => {
        this.categories = nextCategory;
        this.productService.getProductListByCategory(id).subscribe(next => {
          this.productListByCategory = next;
        }, error => (console.log(error)));
      }, errorCategory => {
        console.log(errorCategory);
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
