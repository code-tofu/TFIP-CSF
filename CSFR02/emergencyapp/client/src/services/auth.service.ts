import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiURL = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authUser(credential: Credential): Observable<HttpResponse<Object>> {
    console.log(credential);  
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        observe: "response" as "response" //force correct overload
      };
    return this.http.post<HttpResponse<Object>>(apiURL, credential, options);
  }
}
