import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {
  }

  getUserList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createUser(user): Observable<any> {
    return this.http.post(this.url, user);
  }

  editUser(user): Observable<any> {
    return this.http.put(this.url + '/' + user.id, user);
  }


  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
