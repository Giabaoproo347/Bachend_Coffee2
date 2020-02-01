import { Component, OnInit } from '@angular/core';
import {Categories} from '../../../../model/categories.model';
import {CategoriesService} from '../../../../service/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../model/user.model';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: User;

  constructor(
    private userService: CategoriesService,
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
