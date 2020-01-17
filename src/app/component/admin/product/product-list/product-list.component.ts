import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../../../app.component';
import {Product} from '../../../../model/product.model';
import {ProductService} from '../../../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  content: string;

  constructor(private productService: ProductService, private app: AppComponent) {
  }

  ngOnInit() {
    this.app.setIsShow(true);
    this.productService.getProductList().subscribe(next =>
      (this.productList = next), err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }


}
