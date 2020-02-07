import { Component, OnInit } from '@angular/core';
import {Payment} from '../../../model/payment.model';
import {PaymentService} from '../../../service/payment.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-payment-list-by-user',
  templateUrl: './payment-list-by-user.component.html',
  styleUrls: ['./payment-list-by-user.component.css']
})
export class PaymentListByUserComponent implements OnInit {

  paymentListById: Payment[];
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
    this.paymentService.findAllOrderByUser_Id(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'Đang chờ xử lý'))
    )
      .subscribe(orderListOrder => {
        this.paymentListById = orderListOrder;
      }, error => {
        console.log(error);
      });

    this.paymentService.findAllOrderByUser_Id(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'Đang giao hàng'))
    )
      .subscribe(paymentListProcessing => {
        this.paymentListProcessing = paymentListProcessing;
      }, error => {
        console.log(error);
      });

    this.paymentService.findAllOrderByUser_Id(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'Đã giao hàng'))
    )
      .subscribe(paymentListDone => {
        this.paymentListDone = paymentListDone;
      }, error => {
        console.log(error);
      });
    this.paymentService.findAllOrderByUser_Id(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'Hủy đơn hàng'))
    )
      .subscribe(paymentListCancel => {
        this.paymentListCancel = paymentListCancel;
      }, error => {
        console.log(error);
      });
  }
}

