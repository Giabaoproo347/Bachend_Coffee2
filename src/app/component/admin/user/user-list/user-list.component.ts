import { Component, OnInit } from '@angular/core';
import {Categories} from '../../../../model/categories.model';
import {CategoriesService} from '../../../../service/categories.service';
import {User} from '../../../../model/user.model';
import {UserService} from '../../../../user/_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  content: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserList().subscribe(next => (this.userList = next),
      error => (this.content = this.content = JSON.parse(error.error).message));
  }

}
