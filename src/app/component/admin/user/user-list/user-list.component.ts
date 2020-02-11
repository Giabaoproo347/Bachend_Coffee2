import {Component, OnInit} from '@angular/core';
import {User} from '../../../../model/user.model';
import {UserService} from '../../../../user/_services/user.service';
import {TokenStorageService} from '../../../../user/_services/token-storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  content: string;
  currentUser: any;

  constructor(private userService: UserService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.userService.getUserList().subscribe(next => (this.userList = next),
      error => (this.content = this.content = JSON.parse(error.error).message));
  }

}
