import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../../user/_services/token-storage.service';
import {AppComponent} from '../../../../app.component';
import {Product} from '../../../../model/product.model';
import {ProductService} from '../../../../service/product.service';
import {PromotionService} from '../../../../service/promotion.service';
import {CategoriesService} from '../../../../service/categories.service';
import {ProductPictureService} from '../../../../service/product-picture.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  useFile: any[];
  product: Product;
  promotionList: any;
  promotion: any;
  categoriesList: any;
  categories: any;
  previewUrl: any[];
  message = false;
  productPicture: any[];

  constructor(
    private productService: ProductService,
    private promotionService: PromotionService,
    private categoriesService: CategoriesService,
    private productPictureService: ProductPictureService,
    private fb: FormBuilder,
    private router: Router,
    private token: TokenStorageService,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    if (!this.token.getToken()) {
      this.router.navigate(['/login']);
    }
    this.app.setIsShow(true);
    this.productForm = this.fb.group({
      id: '',
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      promotion: [''],
      categories: ['']
    });
    this.promotionService.getPromotionList().subscribe(next => this.promotionList = next);
    this.categoriesService.getCategoriesList().subscribe(next => this.categoriesList = next);
    this.useFile = [];
    this.previewUrl = [];
    this.productPicture = [];
    this.promotion = [];
    this.categories = [];
  }

  onSubmit() {
    if (this.productForm.valid) {
      const {value} = this.productForm;
      this.product = value;
      for (const preview of this.previewUrl) {
        this.productPictureService.createProductPicture(preview).subscribe(
          next => {
            this.productPicture.push({
              id: next
            });
          }
        );
      }
    } else {
      console.log('error');
    }
    setTimeout(() => {
      this.createProduct();
    }, 1000);
  }

  onSelectFile(event) {
    this.useFile = [];
    this.useFile = event.srcElement.files;
    console.log(this.useFile);
    this.preview();
  }

  createProduct() {
    this.product.productPicture = this.productPicture;
    this.product.promotion = this.promotion;
    this.product.categories = this.categories;
    this.productService.createProduct(this.product).subscribe(next => {
      this.ngOnInit();
      this.message = true;
    });
  }

  preview() {
    // Show preview
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.useFile.length; i++) {
      const mimeType = this.useFile[i].type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(this.useFile[i]);
      reader.onload = event => {
        if (typeof reader.result === 'string') {
          this.previewUrl[i] = reader.result;
        }
      };
    }
    console.log(this.previewUrl);
  }

  addPromotion(id) {
      this.promotionService.getPromotion(id).subscribe(next => this.promotion = next);
  }

  addCategories(id) {
    this.categoriesService.getCategories(id).subscribe(next => this.categories = next);
  }
}
