import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Categories} from '../../../model/categories.model';
import {CategoriesService} from '../../../service/categories.service';

@Component({
  selector: 'app-categories-delete',
  templateUrl: './categories-delete.component.html',
  styleUrls: ['./categories-delete.component.css']
})
export class CategoriesDeleteComponent implements OnInit {

  categories: Categories;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.categoriesService.getCategories(id).subscribe(next => {
        this.categories = next;
      }, error => {
        this.categories = null;
        console.log(error);
      }
    );
  }

  deleteCategories(id) {
    console.log(id);
    this.categoriesService.deleteCategories(id).subscribe(next => {
      this.router.navigate(['categories-list']);
    });
  }

}
