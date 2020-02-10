import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Payment} from '../model/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private url = 'http://localhost:8080/api/payment';

  constructor(private http: HttpClient) {
  }

  findAllByUserId(idUser): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/user/' + idUser);
  }

  getPaymentList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getPayment(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  getPaymentByStatus(): Observable<any> {
    return this.http.get<Payment[]>(this.url + '/list-by-status');
  }

  createPayment(payment): Observable<any> {
    return this.http.post(this.url, payment);
  }

  editPayment(payment): Observable<any> {
    return this.http.put(this.url + '/' + payment.id, payment);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  changeOrderStatus(id, status): Observable<any> {
    return this.http.put(this.url + '/change-status/' + id, status);
  }
}
