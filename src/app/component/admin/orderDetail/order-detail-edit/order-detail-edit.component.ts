import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderDetail} from '../../../../model/orderDetail.model';
import {OrderDetailService} from '../../../../service/order-detail.service';

@Component({
  selector: 'app-order-detail-edit',
  templateUrl: './order-detail-edit.component.html',
  styleUrls: ['./order-detail-edit.component.css']
})
export class OrderDetailEditComponent implements OnInit {

  orderDetail: OrderDetail;
  orderDetailForm: FormGroup;
  message: boolean;

  constructor(
    private orderDetailService: OrderDetailService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.orderDetailForm = this.fb.group({
      salePrice: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.orderDetailService.getOrderDetail(id).subscribe(
      next => {
        this.orderDetail = next;
        console.log(this.orderDetail);
        this.orderDetailForm.patchValue(this.orderDetail);
        console.log(this.orderDetailForm);
      },
      error => {
        console.log(error);
        this.orderDetail = null;
      }
    );
  }

  onSubmit() {
    if (this.orderDetailForm.valid) {
      const {value} = this.orderDetailForm;
      const data = {
        ...this.orderDetail,
        ...value
      };
      this.orderDetailService.editOrderDetail(data).subscribe(
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
