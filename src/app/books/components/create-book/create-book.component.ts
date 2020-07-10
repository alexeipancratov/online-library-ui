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
            title: new FormControl(null),
            author: new FormControl(null),
            salePrice: new FormControl(0),
            rentPrice: new FormControl(0)
        });
    }

    onSubmit() {
        console.log(this.createBookForm);
    }
}
