import { Component, OnInit } from '@angular/core';
import {Categories} from '../../../../model/categories.model';
import {CategoriesService} from '../../../../service/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../model/user.model';
import {UserService} from '../../../../user/_services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getUserById(id).subscribe(next => {
        this.user = next;
      }, error => {
        this.user = null;
        console.log(error);
      }
    );
  }

  deleteUser(id) {
    console.log(id);
    this.userService.deleteUser(id).subscribe(next => {
      this.router.navigate(['user-list']);
    });
  }

}
