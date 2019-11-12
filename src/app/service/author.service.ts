import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../book';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  URl = 'https://tranquil-shore-30082.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Book[]> {
    return this.http.get(this.URl + 'api/author')
      .pipe(
        map(res => res['payload'])
      );

  }
}
