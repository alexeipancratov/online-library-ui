import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../../../models/book';

@Component({
  selector: 'books',
  templateUrl: './books.component.html'
})
export class BooksComponent {
  books$: Observable<Book>;

  constructor(httpClient: HttpClient) {
    this.books$ = httpClient.get<Book>('https://localhost:44378/books');
  }
}
