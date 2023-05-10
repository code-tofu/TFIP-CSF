import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const matModules: any[] = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MaterialModule {}
