import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Book } from 'src/models/book';

@Component({
  selector: 'create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  createBookForm: FormGroup;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.createBookForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ]),
      salePrice: new FormControl(null, [
        Validators.required
      ]),
      rentPrice: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit() {
    const rawValue = this.createBookForm.getRawValue();
    const body = new Book();
    body.title = rawValue.title;
    body.author = rawValue.author;
    body.salePrice = +rawValue.salePrice;
    body.rentPrice = +rawValue.rentPrice;

    this.httpClient.post('https://localhost:44378/books', body)
      .subscribe(() => this.router.navigate(['/list-books']));
  }

  get title() {
    return this.createBookForm.get('title');
  }

  get author() {
    return this.createBookForm.get('author');
  }

  get salePrice() {
    return this.createBookForm.get('salePrice');
  }

  get rentPrice() {
    return this.createBookForm.get('rentPrice');
  }
}
