import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiResp } from './api-resp';
import { Observable, Subscription, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  apiURL: string = 'https://official-joke-api.appspot.com/random_joke';
  //   injectHttp
  constructor(private httpClient: HttpClient) {}

  //  sub$!: Observable<ApiResp>;
  //   this.sub$= this.httpClient.get<ApiResp>(this.apiURL).subscribe({
  //     next: (resp: ApiResp) => {},
  //     error: (error: HttpErrorResponse) =>{},
  //     complete: () => { this.sub$.unsubscribe()}
  //   })

  //   getSetupObs(): Observable<String> {
  //     return this.httpClient.get<ApiResp>(this.apiURL).pipe(
  //       tap(console.log),
  //       map((resp: ApiResp) => resp.setup),
  //       tap(console.log)
  //     );
  //   }
  //   //calls a different joke lol
  //   getPunchObs(): Observable<String> {
  //     return this.httpClient.get<ApiResp>(this.apiURL).pipe(
  //       map((resp: ApiResp) => resp.punchline),
  //       tap(console.log)
  //     );
  //   }
  getJokeObs(): Observable<ApiResp> {
    return this.httpClient.get<ApiResp>(this.apiURL).pipe(tap(console.log));
  }
}
