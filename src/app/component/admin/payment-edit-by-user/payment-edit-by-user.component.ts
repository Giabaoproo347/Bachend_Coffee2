import { Component, OnInit } from '@angular/core';
import {Payment} from '../../../model/payment.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PaymentService} from '../../../service/payment.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-payment-edit-by-user',
  templateUrl: './payment-edit-by-user.component.html',
  styleUrls: ['./payment-edit-by-user.component.css']
})
export class PaymentEditByUserComponent implements OnInit {

  payment: Payment;
  paymentForm: FormGroup;
  message: boolean;
  status = ['Hủy đơn hàng'];


  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      status: ['Hủy đơn hàng']
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.paymentService.getPayment(id).subscribe(
      next => {
        this.payment = next;
        console.log(this.payment);
        this.paymentForm.patchValue(this.payment);
        console.log(this.paymentForm);
      },
      error => {
        console.log(error);
        this.payment = null;
      }
    );
  }
  onSubmit() {
    if (this.paymentForm.valid) {
      const {value} = this.paymentForm;
      const data = {
        ...this.payment,
        ...value
      };
      this.paymentService.editPayment(data).subscribe(
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
