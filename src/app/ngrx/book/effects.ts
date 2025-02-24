import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {BookService} from '../../services/book.service';
import * as BookActions from './actions';
import {catchError, map, mergeMap, of} from 'rxjs';

export const bookEffects = createEffect(
  (actions$ = inject(Actions), bookService = inject(BookService)) => {
    return actions$.pipe(
      ofType(BookActions.fetchListBooks),
      mergeMap(() => bookService.getAllBooks().pipe(
        map((books: any) => BookActions.fetchListBooksSuccess({ListBooks: books})),

        catchError((error: any) => of(BookActions.fetchListBooksError({error}))),
      ))
    )
  },
  {functional: true}
);
