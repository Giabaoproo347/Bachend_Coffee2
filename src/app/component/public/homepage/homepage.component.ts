import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product.model';
import {ProductService} from '../../../service/product.service';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  productList: Product[] = [];
  content: string;
  productSlice = this.productList.slice(1, 8);

  constructor(private productService: ProductService, private app: AppComponent) {
  }

  ngOnInit() {
    this.app.setIsShow(true);
    this.productService.getProductList().subscribe(next =>
      (this.productList = next), err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }

}
