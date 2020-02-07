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
  currentUser: any;

  constructor(
    private token: TokenStorageService,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }
}
