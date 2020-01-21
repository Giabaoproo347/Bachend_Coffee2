import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderDetail} from '../../../../model/orderDetail.model';
import {OrderDetailService} from '../../../../service/order-detail.service';

@Component({
  selector: 'app-order-detail-delete',
  templateUrl: './order-detail-delete.component.html',
  styleUrls: ['./order-detail-delete.component.css']
})
export class OrderDetailDeleteComponent implements OnInit {

  orderDetail: OrderDetail;

  constructor(
    private orderDetailService: OrderDetailService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.orderDetailService.getOrderDetail(id).subscribe(
      next => {
        this.orderDetail = next;
      },
      error => {
        this.orderDetail = null;
        console.log('error');
      }
    );
  }
  deleteOrderDetail(id) {
    console.log(id);
    this.orderDetailService.deleteOrderDetail(id).subscribe(
      next => {
        this.router.navigate(['orderDetail-list']);
      }
    );
  }
}
