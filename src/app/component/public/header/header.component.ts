import {Component, OnInit} from '@angular/core';
import {Categories} from '../../../model/categories.model';
import {Promotion} from '../../../model/promotion.model';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {CategoriesService} from '../../../service/categories.service';
import {PromotionService} from '../../../service/promotion.service';
import {Observable, Subscription} from 'rxjs';
import {Product} from '../../../model/product.model';
import {ProductService} from '../../../service/product.service';
import {ShoppingCartService} from '../../../service/shopping-cart.service';
import {ShoppingCart} from '../../../model/shopping-cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  isShow = false;
  increaseCart = 0;
  categoryList: Categories[];
  promotionList: Promotion[];
  public products: Observable<Product[]>;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;
  private cartSubscription: Subscription;

  constructor(private tokenStorageService: TokenStorageService,
              private categoriesService: CategoriesService,
              private promotionService: PromotionService,
              private productsService: ProductService,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
    this.categoriesService.getCategoriesList().subscribe(next => {
      this.categoryList = next;
    }, error => (console.log(error)));
    this.promotionService.getPromotionList().subscribe(next => (this.promotionList = next), error => (console.log(error)));

    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
    });
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
    this.increaseCart += this.increaseCart;
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
    this.increaseCart -= this.increaseCart;
  }

}
