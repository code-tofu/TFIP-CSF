import { Component, OnInit, inject } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
})
export class ViewerComponent implements OnInit {
  imageData!: String;

  photoSvc = inject(PhotoService);
  router = inject(Router);

  ngOnInit() {
    if (this.photoSvc.photodata) {
      this.imageData = this.photoSvc.photodata;
    } else {
      this.router.navigate(['/']);
      return;
    }
  }

  uploadPhotoURL() {}

  uploadFile(filename: string) {
    if (!this.photoSvc.photodata) return;
    const arr = this.imageData.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[arr.length - 1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const newFile = new File([u8arr], filename, { type: mime });
    console.info(newFile);
    return newFile;
  }
}
