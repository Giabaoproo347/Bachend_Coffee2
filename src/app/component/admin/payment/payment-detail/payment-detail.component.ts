import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Payment} from '../../../../model/payment.model';
import {PaymentService} from '../../../../service/payment.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  payment: Payment;

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.paymentService.getPayment(id).subscribe(
      next => {
        this.payment = next ;
      },
      error => {
        console.log(error);
        this.payment = null;
      }
    );
  }

}
