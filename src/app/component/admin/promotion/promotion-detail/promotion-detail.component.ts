import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Promotion} from '../../../../model/promotion.model';
import {PromotionService} from '../../../../service/promotion.service';

@Component({
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['./promotion-detail.component.css']
})
export class PromotionDetailComponent implements OnInit {

  promotion: Promotion;

  constructor(
    private promotionService: PromotionService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.promotionService.getPromotion(id).subscribe(
      next => {
        this.promotion = next;
      },
      error => {
        console.log(error);
        this.promotion = null;
      }
    );
  }

}
