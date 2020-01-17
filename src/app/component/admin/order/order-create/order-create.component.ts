import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Order} from '../../../../model/order.model';
import {OrderService} from '../../../../service/order.service';


@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  orderForm: FormGroup;
  order: Order;
  message: boolean;

  constructor(
    private orderService: OrderService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      id: '',
      purchaseDate: ['', [Validators.required]],
      deliveryDate: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      const {value} = this.orderForm;
      this.order = value;
      this.orderService.createOrder(this.order).subscribe(
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
