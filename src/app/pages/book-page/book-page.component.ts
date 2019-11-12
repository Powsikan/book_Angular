import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../book';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  public books: Book[];

  bookForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    authorId: new FormControl(''),
  });


  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getAll().subscribe(res => {
      this.books = res;
    });
  }

  onSubmit() {
    this.bookService.postAll(this.bookForm.value).subscribe(res => {
      console.log(res);
    });
  }
}


