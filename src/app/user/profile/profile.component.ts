import {Component, OnInit} from '@angular/core';

import {TokenStorageService} from '../_services/token-storage.service';
import {AppComponent} from '../../app.component';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {Order} from '../../model/order.model';
import {OrderService} from '../../service/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  currentUser: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private token: TokenStorageService
  ) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getUser(id).subscribe(next => {
        this.user = next;
      },
      error => {
        console.log(error);
        this.user = null;
      });
  }
}
