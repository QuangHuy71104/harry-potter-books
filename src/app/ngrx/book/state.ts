// @ts-ignore
import { BookModel } from '../../models/book.model';

export interface BookState {
  listBooks: BookModel[];
  isFetching: boolean;
  fetchListBooksSuccess: boolean;
  fetchListBooksError: any;

  book: BookModel
}
