import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Promotion} from '../../../../model/promotion.model';
import {PromotionService} from '../../../../service/promotion.service';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.css']
})
export class PromotionEditComponent implements OnInit {

  promotion: Promotion;
  promotionForm: FormGroup;
  message: boolean;

  constructor(
    private promotionService: PromotionService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.promotionForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(1) ]],
      price: ['', Validators.required]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.promotionService.getPromotion(id).subscribe(
      next => {
        this.promotion = next;
        console.log(this.promotion);
        this.promotionForm.patchValue(this.promotion);
        console.log(this.promotionForm);
      },
      error => {
        console.log(error);
        this.promotion = null;
      }
    );
  }
  onSubmit() {
    if (this.promotionForm.valid) {
      const {value} = this.promotionForm;
      const data = {
        ...this.promotion,
        ...value
      };
      this.promotionService.editPromotion(data).subscribe(
        next => {
          this.message = true;
          this.ngOnInit();
        },
        error => {
          console.log(error);
        }
      );
    }
  }


}
