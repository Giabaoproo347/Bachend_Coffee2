import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../../../app.component';
import {Product} from '../../../../model/product.model';
import {ProductService} from '../../../../service/product.service';
import {SearchProductByName} from '../../../../model/SearchProductByName';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private nameProduct = '';
  productList: Product[] = [];
  content: string;
  productForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private productService: ProductService, private app: AppComponent) {
  }

  ngOnInit() {
    this.app.setIsShow(true);
    this.productService.getProductList().subscribe(next =>
      (this.productList = next), err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }
  searchProductByName() {
    const nameForm: SearchProductByName = {
      nameProduct: this.nameProduct
    };
    this.productService.searchProductByName(nameForm).subscribe(
      result => {
        this.productList = result;
      }, error => {
        console.log(error);
      }
    );
  }

}
