import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Categories} from '../../../../model/categories.model';
import {CategoriesService} from '../../../../service/categories.service';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {

  categoriesForm: FormGroup;
  public  useFile: any = File;
  categories: Categories;
  previewUrl: any = null;
  message = false;
  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoriesForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
    });
    this.useFile = null;
    this.previewUrl = null;
  }

  onSubmit() {
    if (this.categoriesForm.valid) {
      const {value} = this.categoriesForm;
      this.categories = value;
      this.categoriesService.createCategories(this.categories).subscribe(
        next => {
          console.log(next);
          this.message = true;
          this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }


}
