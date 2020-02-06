import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Categories} from '../../../../model/categories.model';
import {CategoriesService} from '../../../../service/categories.service';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  categories: Categories;
  categoriesForm: FormGroup;
  file: File;
  message = false;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.categoriesForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.categoriesService.getCategories(id).subscribe(
      next => {
        this.categories = next;
        console.log(this.categories);
        this.categoriesForm.patchValue(this.categories);
        console.log(this.categoriesForm);
      },
      error => {
        console.log(error);
        this.categories = null;
      }
    );
  }

  onSubmit() {
    if (this.categoriesForm.valid) {
      const {value} = this.categoriesForm;
      const data = {
        ...this.categories,
        ...value
      };
      console.log(data);
      this.categoriesService.editCategories(data).subscribe(next => {
          console.log(next);
          this.message = true;
          this.ngOnInit();
        },
        error => console.log(error)
      );
    }
  }

}
