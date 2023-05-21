import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListerComponent } from './lister/lister.component';
import { ViewerComponent } from './viewer/viewer.component';
import { FormerComponent } from './former/former.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListerComponent,
    ViewerComponent,
    FormerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
