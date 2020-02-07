import { Component, OnInit } from '@angular/core';
import {Payment} from '../../model/payment.model';
import {PaymentService} from '../../service/payment.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-payment-lists',
  templateUrl: './payment-lists.component.html',
  styleUrls: ['./payment-lists.component.css']
})
export class PaymentListsComponent implements OnInit {

  paymentListOrder: Payment[];
  paymentListDone: Payment[];
  paymentListProcessing: Payment[];
  paymentListCancel: Payment[];

  constructor(private paymentService: PaymentService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.paymentService.findAllByUserId(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'order'))
    )
      .subscribe(orderListOrder => {
        this.paymentListOrder = orderListOrder;
      }, error => {
        console.log(error);
      });

    this.paymentService.findAllByUserId(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'processing'))
    )
      .subscribe(orderListProcessing => {
        this.paymentListProcessing = orderListProcessing;
      }, error => {
        console.log(error);
      });

    this.paymentService.findAllByUserId(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'done'))
    )
      .subscribe(orderListDone => {
        this.paymentListDone = orderListDone;
      }, error => {
        console.log(error);
      });
    this.paymentService.findAllByUserId(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'cancel'))
    )
      .subscribe(orderListCancel => {
        this.paymentListCancel = orderListCancel;
      }, error => {
        console.log(error);
      });
  }
}
