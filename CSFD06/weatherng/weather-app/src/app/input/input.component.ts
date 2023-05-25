import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  weatherForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private weatherSvc: WeatherService
  ) {}

  ngOnInit(): void {
    this.weatherForm = this.fb.group({
      city: this.fb.control<string>('', [Validators.required]),
    });
  }

  getWeather() {
    console.info('>>Input:', this.weatherForm.value.city);
    this.router.navigate(['/weather', this.weatherForm.value.city]);
  }
}
