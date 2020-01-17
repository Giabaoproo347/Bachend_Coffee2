import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AppComponent} from '../../../../app.component';
import {Product} from '../../../../model/product.model';
import {ProductService} from '../../../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private  app: AppComponent
  ) {
  }

  ngOnInit() {
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
  }


}
