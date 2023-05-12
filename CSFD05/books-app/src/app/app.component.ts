import { Component, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, map, tap } from 'rxjs';

const alphabet: string[] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const BOOK_URL = 'http://localhost:8080/api/books/search';
const LIMIT = 20;
const MINLENGTH = 3;

interface booksResponse {
  titles: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tapRequest = new Subject<booksResponse>();
  http = inject(HttpClient);

  searchString: string = '';
  searchResults$!: Observable<string[]>;
  searchResults: string[] = [];
  searchTitle(e: any) {
    if (alphabet.includes(e.key.toLowerCase())) {
      this.searchString = e.target.value.trim();
      console.info(this.searchString);
      if (this.searchString.length >= MINLENGTH)
        this.searchResults$ = this.getTitlesList();
    }
  }

  getTitlesList(): Observable<string[]> {
    const qs = new HttpParams().set('sq', this.searchString).set('lim', LIMIT);
    console.info(qs.toString());

    return this.http
      .get<booksResponse>(BOOK_URL, { params: qs })
      .pipe(map((resp) => resp.titles));
  }
}

//   tap((resp) => this.tapRequest.next(resp)),
// pipe(
//     tap((resp) => console.info(resp.titles)),
//     map((resp) => {
//       console.info('tap');
//       return (this.searchResults = resp.titles);
//     })
