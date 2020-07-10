import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBooksComponent } from 'src/app/books/components/list-books/list-books.component';
import { CreateBookComponent } from 'src/app/books/components/create-book/create-book.component';

const routes: Routes = [
  { path: 'list-books', component: ListBooksComponent },
  { path: 'create-book', component: CreateBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
