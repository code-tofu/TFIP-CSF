import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WeatherResp } from '../model';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  city!: String;
  weather$!: Observable<WeatherResp>;

  constructor(
    private actRoute: ActivatedRoute,
    private title: Title,
    private weatherSvc: WeatherService
  ) {}

  ngOnInit() {
    this.city = this.actRoute.snapshot.params['city'];
    console.info('>>DisplayCity:', this.city);
    this.weather$ = this.weatherSvc.getWeather(this.city, 'metric');
  }
}
