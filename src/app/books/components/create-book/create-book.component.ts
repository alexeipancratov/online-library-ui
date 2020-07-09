import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  createBookForm: FormGroup;

  ngOnInit() {
    this.createBookForm = new FormGroup({
      author: new FormControl(null),
      rentPrice: new FormControl(0),
      salePrice: new FormControl(0),
      title: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.createBookForm);
  }
}
