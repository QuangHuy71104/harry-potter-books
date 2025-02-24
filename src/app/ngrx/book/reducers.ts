import {createReducer, on} from '@ngrx/store';
import {BookState} from './state';
import * as BookActions from './actions';

export const initialState : BookState = {
  listBooks: [],
  isFetching: false,
  fetchListBooksSuccess: false,
  fetchListBooksError: null,
  book: null
}

export const bookReducer = createReducer(
  initialState,

  on(BookActions.fetchListBooks, (state) => {
    return<BookState> {
      ...state,
      listBooks: [],
      isFetchingListBooks: true,
    }
  }),

  on(BookActions.fetchListBooksSuccess, (state, {ListBooks}) => {
    return<BookState> {
      ...state,
      listBooks: ListBooks,
      isFetchingListBooks: false,
      fetchListBooksSuccess: true,
    }
  }),
  on(BookActions.fetchListBooksError, (state, {error}) => {
    return<BookState> {
      ...state,
      isFetchingListBooks: false,
      fetchListBooksError: error.message
    }
  })
)
