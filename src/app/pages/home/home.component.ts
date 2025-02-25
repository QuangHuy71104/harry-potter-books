import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {BookModel} from '../../models/book';
import {Store} from '@ngrx/store';
import {BookService} from '../../services/book.service';
import {BookState} from '../../ngrx/book/state';
import {AsyncPipe} from '@angular/common';

import * as BookActions from '../../ngrx/book/actions';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    MatButton,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  book$! : Observable<BookModel[]>;


  constructor(private bookService:BookService,
              private store: Store<{book: BookState}>){
    this.book$ = this.store.select('book', 'listBooks');
    this.store.dispatch(BookActions.fetchListBooks());
  }

  ngOnInit(): void {
    this.book$.subscribe((data) => {
      console.log(data);
    })
  }
}

