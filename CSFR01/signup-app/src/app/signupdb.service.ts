import { Injectable } from '@angular/core';
import sportData from 'sportdb.json';
import { Sport } from './sport';
import { Signups } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupdbService {

  constructor() { }

  sportData : Sport[] = sportData;
  allSignUps: Signups[] = [];


}
