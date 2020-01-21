import {Component, OnInit} from '@angular/core';
import {Categories} from '../../../model/categories.model';
import {Promotion} from '../../../model/promotion.model';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {CategoriesService} from '../../../service/categories.service';
import {PromotionService} from '../../../service/promotion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  isShow = false;
  categoryList: Categories[];
  promotionList: Promotion[];

  constructor(private tokenStorageService: TokenStorageService,
              private categoriesService: CategoriesService,
              private promotionService: PromotionService) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
    this.categoriesService.getCategoriesList().subscribe(next => {
      this.categoryList = next;
    }, error => (console.log(error)));
    this.promotionService.getPromotionList().subscribe(next => (this.promotionList = next), error => (console.log(error)));
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
