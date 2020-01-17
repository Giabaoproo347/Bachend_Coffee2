import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Categories} from '../../../../model/categories.model';
import {CategoriesService} from '../../../../service/categories.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css']
})
export class CategoriesDetailComponent implements OnInit {

  categories: Categories;
  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.categoriesService.getCategories(id).subscribe(next => {
        this.categories = next;
      }, error => {
        console.log(error);
        this.categories = null;
      }
    );
  }


}
