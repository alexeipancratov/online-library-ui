import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  createBookForm: FormGroup;
  requestErrorMessage: string = null;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.createBookForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      rentPrice: new FormControl(null, [
        Validators.required
      ]),
      salePrice: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit() {
    const rawValue = this.createBookForm.getRawValue();
    const body = {
      title: rawValue.title,
      author: rawValue.author,
      rentPrice: +rawValue.rentPrice,
      salePrice: +rawValue.salePrice
    };

    this.httpClient.post('https://localhost:44378/books', body)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(() => this.router.navigate(['/books']));
  }

  get author() {
    return this.createBookForm.get('author');
  }

  get rentPrice() {
    return this.createBookForm.get('rentPrice');
  }

  get salePrice() {
    return this.createBookForm.get('salePrice');
  }

  get title() {
    return this.createBookForm.get('title');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      
      this.requestErrorMessage = `${error.error.error}`;
    }

    return throwError(
      'Something bad happened; please try again later.');
  }
}
