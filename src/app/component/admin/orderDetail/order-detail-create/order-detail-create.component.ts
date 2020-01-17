import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {OrderDetail} from '../../../../model/orderDetail.model';
import {OrderDetailService} from '../../../../service/order-detail.service';

@Component({
  selector: 'app-order-detail-create',
  templateUrl: './order-detail-create.component.html',
  styleUrls: ['./order-detail-create.component.css']
})
export class OrderDetailCreateComponent implements OnInit {

  orderDetailForm: FormGroup;
  orderDetail: OrderDetail;
  message: boolean;

  constructor(
    private orderDetailService: OrderDetailService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.orderDetailForm = this.fb.group({
      id: '',
      salePrice: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.orderDetailForm.valid) {
      const {value} = this.orderDetailForm;
      this.orderDetail = value;
      this.orderDetailService.createOrderDetail(this.orderDetail).subscribe(
        next => {
          console.log(next);
          this.message = true;
          this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }

}
