import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskformComponent } from './taskform/taskform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileuploaderComponent } from './taskform/fileuploader/fileuploader.component';
import { SectionComponent } from './section/section.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  //IMPT: remember that root path is ""and not "/"
  { path: "", component:MainComponent},
  //IMPT: remember that other endpoints have no "/" in front
  { path: "section/:id", component:TaskformComponent},
  { path: "**", redirectTo: "/", pathMatch:"full" },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskformComponent,
    FileuploaderComponent,
    SectionComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
