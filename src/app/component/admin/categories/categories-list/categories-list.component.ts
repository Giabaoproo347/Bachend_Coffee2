import {Component, OnInit} from '@angular/core';
import {Categories} from '../../../model/categories.model';
import {CategoriesService} from '../../../service/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categoriesList: Categories[] = [];
  content: string;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categoriesService.getCategoriesList().subscribe(next => (this.categoriesList = next),
      error => (this.content = this.content = JSON.parse(error.error).message));
  }

}
