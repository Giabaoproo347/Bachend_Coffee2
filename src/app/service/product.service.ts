import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {SearchProductByName} from '../model/SearchProductByName';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) {
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductHot(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/top-hot');
  }


  getProductListByCategory(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/categories/' + id);
  }

  getProductListByPromotion(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/promotion/' + id);
  }


  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + '/' + id);
  }

  createProduct(product: Product): Observable<any> {
    console.log(product);
    return this.http.post(this.url, {
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      image2: product.image2,
      image3: product.image3,
      like: product.like,
      promotion: product.promotion,
      category: product.categories,
    });
  }

  editProduct(product: Product): Observable<any> {
    return this.http.put(this.url + '/' + product.id, {
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      image2: product.image2,
      image3: product.image3,
      like: product.like,
      promotion: product.promotion,
      category: product.categories,
    });
  }

  editProduct2(product): Observable<any> {
    return this.http.put(this.url + '/' + product.id, product);
  }


  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  createProduct1(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  public deleteProduct1(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  searchProductByName(nameProduct: SearchProductByName): Observable<Product[]> {
    return this.http.post<Product[]>(this.url + '/search-product-by-name', nameProduct);
  }

  addLike(product: Product): Observable<any> {
    return this.http.put(this.url + '/like/' + product.id, product);
  }
}
