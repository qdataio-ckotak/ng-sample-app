import { Injectable } from '@angular/core';
import { IService } from '../common/interfaces/iservice';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService<T> implements IService{

  constructor(private url: string) { 
    this.url = 'http://localhost/api/' + url;
  }

  create(): Observable<T> {
    return of(null)
  }
  read(): Observable<T[]> {
    return of(null)
  }
  update(): Observable<T> {
    return of(null)
  }
  delete(): Observable<T> {
    return of(null)
  }

}
