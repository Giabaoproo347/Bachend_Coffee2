import {Component, OnInit} from '@angular/core';

import {TokenStorageService} from '../_services/token-storage.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoggedIn = false;
  currentUser: any;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  isShow = false;
  private roles: string[];

  constructor(
    private token: TokenStorageService,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  setIsShow(isShow: boolean) {
    this.isShow = isShow;
  }
}
