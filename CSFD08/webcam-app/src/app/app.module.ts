import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { ViewerComponent } from './viewer/viewer.component';
import { WebcamModule } from 'ngx-webcam';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'camera',
    pathMatch: 'full',
  },
  { path: 'camera', component: CameraComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: '**', redirectTo: 'camera', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, CameraComponent, ViewerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
