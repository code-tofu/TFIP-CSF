import { Component, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PhotoService } from '../photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent {
  /*
    webcam input - trigger: Observable<void>: An Observable to trigger image capturing. When it fires, an image will be captured and emitted 
        private trigger: Subject<void> = new Subject<void>();
        public get triggerObservable(): Observable<void> {
            return this.trigger.asObservable();
        }
    */

  triggerSubject: Subject<void> = new Subject<void>();
  imageData!: String;

  public triggerPush() {
    this.triggerSubject.next();
  }

  photoSvc = inject(PhotoService);
  router = inject(Router);
  imageHandler(e: any) {
    console.log(e);
    this.imageData = e.imageAsDataUrl;
    this.photoSvc.photodata = this.imageData;
    this.router.navigate(['/viewer']);
  }
}
