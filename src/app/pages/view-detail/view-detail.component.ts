import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from '../../models/book';
import { BookService } from '../../services/book.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-view-detail',
  imports: [
    NgIf
  ],
  templateUrl: './view-detail.component.html',
  styleUrl: './view-detail.component.css'
})
export class ViewDetailComponent implements OnInit {
  selectedBook?: BookModel;

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    const bookNumber = Number(this.route.snapshot.paramMap.get('number'));
    this.bookService.viewDetail(bookNumber).subscribe((book) => {
      this.selectedBook = book;
    });
  }
}
