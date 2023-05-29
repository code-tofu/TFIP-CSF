import { Injectable } from '@angular/core';
import { Section } from './model/section.model';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {

  project: Section[] = [];

  constructor() { }
}
