import {createAction, props} from '@ngrx/store';
import {BookModel} from '../../models/book';

export const fetchListBooks = createAction('[Book] Fetch List Books');
export const fetchListBooksSuccess = createAction('[Book] Fetch List Books Success', props<{ListBooks: BookModel[]}>());
export const fetchListBooksError = createAction('[Book] Fetch List Books Error', props<{error: any}>());
