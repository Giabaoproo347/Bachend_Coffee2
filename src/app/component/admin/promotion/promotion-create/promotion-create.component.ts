import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Promotion} from '../../../../model/promotion.model';
import {PromotionService} from '../../../../service/promotion.service';

@Component({
  selector: 'app-promotion-create',
  templateUrl: './promotion-create.component.html',
  styleUrls: ['./promotion-create.component.css']
})
export class PromotionCreateComponent implements OnInit {

  promotionForm: FormGroup;
  promotion: Promotion;
  message = false;

  constructor(
    private promotionService: PromotionService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.promotionForm = this.fb.group({
      id: '',
      name: ['', [ Validators.required, Validators.minLength(1) ]],
      price: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.promotionForm.valid) {
      const {value} = this.promotionForm;
      this.promotion = value;
      this.promotionService.createPromotion(this.promotion).subscribe(
        next => {console.log(next);
                 this.message = true;
                 this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }

}
