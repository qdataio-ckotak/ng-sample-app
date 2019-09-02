import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { User } from '../common/models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const newUser = 'http://www.mocky.io/v2/5d6cabfc30000058008fb7bc';
const listUsers = 'http://www.mocky.io/v2/5d6cabac30000058008fb7bb';
const updateUser = 'http://www.mocky.io/v2/5d6cabfc30000058008fb7bc';
const deleteUser = 'http://www.mocky.io/v2/5d6cabfc30000058008fb7bc';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppService<User>{
  
  constructor(
    private http: HttpClient
  ) {
    super('user')
  }

  create(data = {}): Observable<User> {
    return this.http.post(newUser, data)
    .pipe(
      map((data) => data as User)
    );
  }
  read(): Observable<User[]> {
    return this.http.get(listUsers)
    .pipe(
      map((data) => data as User[])
    );
  }
  update(data = {}): Observable<User> {
    return this.http.put(updateUser, data)
    .pipe(
      map((data) => data as User)
    );
  }
  delete(data = {}): Observable<User> {
    return this.http.delete(deleteUser, data)
    .pipe(
      map((data) => data as User)
    );
  }

}
