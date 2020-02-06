import {Component, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../../../model/product.model';
import {ShoppingCart} from '../../../../model/shopping-cart.model';
import {ProductService} from '../../../../service/product.service';
import {AppComponent} from '../../../../app.component';
import {ShoppingCartService} from '../../../../service/shopping-cart.service';
import {Commenter} from '../../../../model/commenter';
import {CommenterService} from '../../../../service/commenter.service';
import {DomSanitizer} from '@angular/platform-browser';
import {TokenStorageService} from '../../../../user/_services/token-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: Product;
  username: string;
  iEdit = false;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;
  private cartSubscription: Subscription;
  public products: Observable<Product[]>;
  listCommenter: Commenter[] = [];
  userId: string;
  tokenJWT: string;
  idCommenter: string;
  productId: string;
  formCommenterCreate = new FormGroup({
    contentInput: new FormControl('')
  });
  contentUpdate = new FormControl();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private  app: AppComponent,
    private shoppingCartService: ShoppingCartService,
    private productsService: ProductService,
    private commenterService: CommenterService,
    private domSanitizer: DomSanitizer,
    private token: TokenStorageService,
    private tokenStorageService: TokenStorageService,
  ) {
    this.route.params.subscribe(params => {
      this.productId = params.id;
    });
    this.userId = this.token.getUserId();
    this.tokenJWT = this.token.getToken();
  }

  ngOnInit() {
    if (this.tokenStorageService.getUser()) {
      this.getAllCommentThisProduct();
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
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
    } else {
      this.getAllCommentThisProduct();
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

  getAllCommentThisProduct() {
    this.commenterService.getAllCommenterByProductId(this.productId).subscribe(
      result => {
        this.listCommenter = result;
      }, error => {
        console.log(error);
      }
    );
  }

  closeForm(closeModalRef: HTMLAnchorElement) {
    closeModalRef.click();
    this.getAllCommentThisProduct();
    this.contentUpdate.reset();
  }

  createCommenter() {
    const {contentInput} = this.formCommenterCreate.value;
    if (contentInput === '' || contentInput === null || contentInput === undefined) {
      return;
    }

    const commenter: Commenter = {
      productId: this.productId,
      content: contentInput,
      user: {
        id: this.token.getUser().id,
        username: this.token.getUsername(),
        password: this.token.getPassword()
      }
    };
    this.commenterService.createCommenter(commenter).subscribe(
      result => {
        console.log(result, 'ok');
        this.getAllCommentThisProduct();
        this.formCommenterCreate.reset();
      }, error => {
        console.log(error);
      }
    );
  }

  getIdComment1(id: string) {
    this.idCommenter = id;
  }

  closeForm1(closeModalRef: HTMLAnchorElement) {
    closeModalRef.click();
    this.getAllCommentThisProduct();
    this.contentUpdate.reset();
  }

  updateCommenter1(commenterId: string, closeModalRef: HTMLAnchorElement) {
    if (this.contentUpdate.value === null || this.contentUpdate.value === '' || this.contentUpdate.value === undefined) {
      return this.closeForm(closeModalRef);
    }
    const commenter: Commenter = {
      /*id: commenterId ,*/
      content: this.contentUpdate.value
    };
    this.commenterService.editComment(commenter).subscribe(
      result => {
        this.closeForm1(closeModalRef);
      }, error => {
        console.log(error);
      }
    );
    this.iEdit = true;
    console.log(commenter);
  }

  deleteComment1(closeModalRef2: HTMLButtonElement) {
    this.commenterService.deleteComment(this.idCommenter).subscribe(
      result => {
        this.getAllCommentThisProduct();
        closeModalRef2.click();
      }, error => {
        console.log(error);
      }
    );
  }

}
