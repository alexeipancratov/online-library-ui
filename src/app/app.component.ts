import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-library-ui';
  books$: Observable<any>;

  constructor(httpClient: HttpClient) {
    this.books$ = httpClient.get('https://localhost:44378/books');
  }
}
