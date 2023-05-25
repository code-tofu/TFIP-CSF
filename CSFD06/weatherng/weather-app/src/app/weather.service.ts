import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResp } from './model';

const apiURL = 'api/';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: String, unit: string): Observable<WeatherResp> {
    const queryParams = new HttpParams().set('units', unit);
    return this.http.get<WeatherResp>(apiURL + city, { params: queryParams });
  }
}
