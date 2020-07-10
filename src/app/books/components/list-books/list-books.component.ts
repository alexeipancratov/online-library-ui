import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../../../models/book';

@Component({
  selector: 'list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  books$: Observable<Book>;

  constructor(httpClient: HttpClient) {
    this.books$ = httpClient.get<Book>('https://localhost:44378/books');
  }
}
