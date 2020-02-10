import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../../../../app.component';
import {Product} from '../../../../model/product.model';
import {ProductService} from '../../../../service/product.service';
import {PromotionService} from '../../../../service/promotion.service';
import {CategoriesService} from '../../../../service/categories.service';
import {ProductPictureService} from '../../../../service/product-picture.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

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
    private route: ActivatedRoute,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    this.app.setIsShow(true);
    this.productForm = this.fb.group({
      id: '',
      price: ['', [Validators.required]],
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      image2: ['', [Validators.required]],
      image3: ['', [Validators.required]],
      description: ['', [Validators.required]],
      categories: [''],
      promotion: ['']
    });
    this.promotion = [];
    this.categories = [];
    this.promotionService.getPromotionList().subscribe(next => this.promotionList = next);
    this.categoriesService.getCategoriesList().subscribe(next => this.categoriesList = next);
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(
      next => {
        const product = next;
        console.log(next);
        this.productForm.patchValue(product);
        this.promotion = next.promotion;
        this.categories = next.categories;
      }, error => {
        console.log(error);
        this.product = null;
      }
    );
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
      this.saveProduct();
    }, 1000);
  }

  onSelectFile(event) {
    this.useFile = [];
    this.useFile = event.srcElement.files;
    this.preview();
  }

  saveProduct() {
    this.product.promotion = this.promotion;
    this.product.categories = this.categories;
    this.productService.editProduct(this.product).subscribe(next => {
      console.log(next);
      this.ngOnInit();
      this.message = true;
    });
  }

  preview() {
    // Show preview
    // tslint:disable-next-line:prefer-for-of
    this.previewUrl = [];
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
  }

  addPromotion(id) {
    this.promotion = '';
    this.promotionService.getPromotion(id).subscribe(next => this.promotion = next);
  }


  addCategories(id) {
    this.categories = '';
    this.categoriesService.getCategories(id).subscribe(next => this.categories = next);
  }
}
