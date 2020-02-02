import { Component, OnInit } from '@angular/core';
import {Categories} from '../../../../model/categories.model';
import {CategoriesService} from '../../../../service/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {User} from '../../../../model/user.model';
import {UserService} from '../../../../user/_services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getUserById(id).subscribe(next => {
        this.user = next;
      }, error => {
        console.log(error);
        this.user = null;
      }
    );
  }


}
