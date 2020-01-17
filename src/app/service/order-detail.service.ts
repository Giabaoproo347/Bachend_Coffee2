import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private url = 'http://localhost:8080/api/order-detail';

  constructor(private http: HttpClient) {
  }

  getOrderDetailList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getOrderDetail(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createOrderDetail(orderDetail): Observable<any> {
    return this.http.post(this.url, orderDetail);
  }

  editOrderDetail(orderDetail): Observable<any> {
    return this.http.put(this.url + '/' + orderDetail.id, orderDetail);
  }

  deleteOrderDetail(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
