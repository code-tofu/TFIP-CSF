import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WrongComponent } from './wrong/wrong.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';


const routes: Routes = [
  { path: "", component:LoginComponent},
  { path: "main", component:MainComponent},
  { path: "loginerror", component:WrongComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WrongComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


