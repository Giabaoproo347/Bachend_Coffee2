import { Component, OnInit } from '@angular/core';
import {OrderDetail} from '../../../../model/orderDetail.model';
import {OrderDetailService} from '../../../../service/order-detail.service';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './order-detail-list.component.html',
  styleUrls: ['./order-detail-list.component.css']
})
export class OrderDetailListComponent implements OnInit {

  orderDetailList: OrderDetail[] = [] ;
  content: string;

  constructor(private orderDetailService: OrderDetailService) { }

  ngOnInit() {
    this.orderDetailService.getOrderDetailList().subscribe(next => {
      this.orderDetailList = next;
      console.log(this.orderDetailList);
    }),
      // tslint:disable-next-line:no-unused-expression
      err => {this.content = this.content = JSON.parse(err.error).message; };
  }
}
