import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { uploadContent } from 'src/models/upload.model';
import { UploadService } from 'src/services/upload.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @ViewChild('uploadFile')
  uploadFile!: ElementRef;

  helpForm!: FormGroup;
  fb = inject(FormBuilder);
  uploadSvc = inject(UploadService);

  ngOnInit(): void {
    this.helpForm = this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      question: this.fb.control<string>('', [Validators.required]),
      file: this.fb.control<File | null>(null, [Validators.required]),
    });
  }

  upload(){
    let f:File[] = [];
    for(let i = 0; i < this.uploadFile.nativeElement.files.length;i++){
      f!.push(this.uploadFile.nativeElement.files[i]);
    }
    // const f: File = this.uploadFile.nativeElement.files[0] as File;
    // console.info(this.helpForm.value, f)
    let content:uploadContent = {...this.helpForm.value}
    console.info(content, f)
    firstValueFrom(this.uploadSvc.upload(content,f))
    .then(resp => {
      console.log(resp);
      alert('upload successful')
      this.helpForm.reset()
    })
    .catch(err => {
      console.log(err);
      alert('upload failed')
    })
  }
}
