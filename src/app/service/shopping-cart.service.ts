import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {StorageService} from './storage.service';
import {Router} from '@angular/router';
import {ShoppingCart} from '../model/shopping-cart.model';
import {Product} from '../model/product.model';
import {OrderDetail} from '../model/orderDetail.model';
import {ProductService} from './product.service';
import {OrderDetailService} from './order-detail.service';
import {CartItem} from '../model/cart-item.model';
import {Promotion} from '../model/promotion.model';
import {PromotionService} from './promotion.service';

const CART_KEY = 'cart';

@Injectable()
export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
  private products: Product[];
  private orderDetail: OrderDetail[];
  public itemCount: number;

  public constructor(private storageService: StorageService,
                     private productService: ProductService,
                     private orderDetailService: OrderDetailService,
                     private promotionService: PromotionService,
                     private router: Router) {
    this.storage = this.storageService.get();

    this.productService.getProductList().subscribe(
      (products) => this.products = products);

    this.orderDetailService.getOrderDetailList().subscribe(
      (options) => this.orderDetail = options);

    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  public addItem(product: Product, quantity: number): void {
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === product.id);
    if (item === undefined) {
      item = new CartItem();
      item.productId = product.id;
      cart.items.push(item);
    }


    item.quantity += quantity;
    cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);
    if (cart.items.length === 0) {
      cart.id = undefined;
    }

    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }

  public setOrderDetail(orderDetail: OrderDetail): void {
    const cart = this.retrieve();
    cart.id = orderDetail.id;
    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  private calculateCart(cart: ShoppingCart): void {
    cart.itemsTotal = cart.items
      .map((item) => item.quantity * this.products.find((p) => p.id === item.productId).price)
      .reduce((previous, current) => previous + current, 0);
    cart.deliveryTotal = cart.id ?
      this.orderDetail.find((x) => x.id === cart.id).salePrice :
      0;
    cart.grossTotal = cart.itemsTotal + cart.deliveryTotal;
  }

  private retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storage.getItem(CART_KEY);
    if (storedCart) {
      cart.updateForm(JSON.parse(storedCart));
    }

    return cart;
  }

  private save(cart: ShoppingCart): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private dispatch(cart: ShoppingCart): void {
    this.subscribers
      .forEach((sub) => {
        try {
          sub.next(cart);
        } catch (e) {
        }
      });
  }
}
