import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../../../../app.component';
import {Product} from '../../../../model/product.model';
import {ProductService} from '../../../../service/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    this.app.setIsShow(true);
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProduct(id).subscribe(
      next => {
        this.product = next;
      },
      error => {
        this.product = null;
        console.log(error);
      }
    );
  }

  deleteProduct(id) {
    console.log(id);
    this.productService.deleteProduct(id).subscribe(next => {
      this.router.navigate(['product-list']);
    });
  }

}
