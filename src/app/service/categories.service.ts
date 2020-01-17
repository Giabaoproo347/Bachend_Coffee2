import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) {
  }

  getCategoriesList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getCategories(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createCategories(order): Observable<any> {
    return this.http.post(this.url, order);
  }

  editCategories(categories): Observable<any> {
    return this.http.put(this.url + '/' + categories.id, categories);
  }

  deleteCategories(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
