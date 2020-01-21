import { Component, OnInit } from '@angular/core';
import {Order} from '../../../../model/order.model';
import {OrderService} from '../../../../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList: Order[] = [];
  contentAlert: string;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrderList().subscribe(next => (this.orderList = next),
      error => (this.contentAlert = this.contentAlert = JSON.parse(error.error).message));
  }

}
