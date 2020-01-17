import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:8080/api/order';

  constructor(private http: HttpClient) {
  }

  getOrderList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getOrder(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createOrder(order): Observable<any> {
    return this.http.post(this.url, order);
  }

  editOrder(order): Observable<any> {
    return this.http.put(this.url + '/' + order.id, order);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
