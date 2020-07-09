import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './books/components/create-book/create-book.component';
import { BooksComponent } from './books/components/books/books.component';


const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'create-book', component: CreateBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
