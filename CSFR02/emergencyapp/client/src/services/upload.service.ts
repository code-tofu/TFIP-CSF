import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { uploadAttachment, uploadContent } from "src/models/upload.model";

@Injectable({
    providedIn: 'root',
  })
export class UploadService {

  http = inject(HttpClient)

  upload(content: uploadContent, attachment: File[]): Observable<any> {
    const formData = new FormData()
    // @RequestPart String title
    formData.set('content', JSON.stringify(content))
    // @RequestPart MultipartFile myFile
    // formData.set('files', attachment)
    for (let i = 0; i < attachment.length; i++) {
        formData.append('files', attachment[i])
      }

    return this.http.post<any>('http://localhost:8080/upload', formData)

  }

}
