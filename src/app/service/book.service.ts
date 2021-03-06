import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Book} from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URl = 'https://tranquil-shore-30082.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Book[]> {
    return this.http.get(this.URl + 'api/book')
      .pipe(
        map(res => res['payload'])
      );

  }

  public postAll(book: any): Observable<Book[]> {
    return this.http.post(this.URl + 'api/book', book)
      .pipe(
        map(res => res['payload'])
      );

  }

}
