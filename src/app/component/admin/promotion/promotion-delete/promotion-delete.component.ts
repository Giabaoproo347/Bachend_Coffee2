import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Promotion} from '../../../../model/promotion.model';
import {PromotionService} from '../../../../service/promotion.service';

@Component({
  selector: 'app-promotion-delete',
  templateUrl: './promotion-delete.component.html',
  styleUrls: ['./promotion-delete.component.css']
})
export class PromotionDeleteComponent implements OnInit {

  promotion: Promotion;

  constructor(
    private promotionService: PromotionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.promotionService.getPromotion(id).subscribe(
      next => {
        this.promotion = next;
      },
      error => {
        this.promotion = null;
        console.log('error');
      }
    );
  }

  deletePromotion(id) {
    console.log(id);
    this.promotionService.deletePromotion(id).subscribe(
      next => {
        this.router.navigate(['promotion-list']);
      }
    );
  }

}
