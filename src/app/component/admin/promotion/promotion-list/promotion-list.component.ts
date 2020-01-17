import { Component, OnInit } from '@angular/core';
import {Promotion} from '../../../../model/promotion.model';
import {PromotionService} from '../../../../service/promotion.service';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent implements OnInit {

  promotionList: Promotion[] = [];
  content: string;

  constructor(private promotionService: PromotionService) {
  }

  ngOnInit() {
    this.promotionService.getPromotionList().subscribe(next => {
        this.promotionList = next;
        console.log(this.promotionList);
      }, err =>
        (this.content = this.content = JSON.parse(err.error).message)
    );
  }

}
