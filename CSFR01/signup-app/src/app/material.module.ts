import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';



const matModules: any[] = [
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatRadioModule
];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MaterialModule { }
