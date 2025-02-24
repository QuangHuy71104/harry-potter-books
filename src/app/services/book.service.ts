import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  getAllBooks(){
    return this.httpClient.get('https://potterapi-fedeperin.vercel.app/en/books')
  }
}
