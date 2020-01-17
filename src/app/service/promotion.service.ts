import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private url = 'http://localhost:8080/api/promotion';

  constructor(private http: HttpClient) {
  }

  getPromotionList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getPromotion(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createPromotion(promotion): Observable<any> {
    return this.http.post(this.url, promotion);
  }

  editPromotion(promotion): Observable<any> {
    return this.http.put(this.url + '/' + promotion.id, promotion);
  }

  deletePromotion(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
