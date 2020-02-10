import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }

  getUserList(): Observable<any[]> {
    return this.http.get<any[]>(API_URL + 'user');
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(API_URL + 'user/' + id);
  }

  createUser(user): Observable<any> {
    return this.http.post(API_URL + 'user', user);
  }

  editUser(user): Observable<any> {
    return this.http.put(API_URL + 'user/' + user.id, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(API_URL + 'user/' + id);
  }
}
