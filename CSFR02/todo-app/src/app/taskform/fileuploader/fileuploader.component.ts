import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent {

  @ViewChild('uploadFile')
  attachmentCtrl!: ElementRef

  attachment = new FormControl<File | null>(null);

  @Output()
  newAttachment = new Subject<File>();

  attach() {
    const f: File = this.attachmentCtrl.nativeElement.files[0]
    //this.form.patchValue({ 'file': f })
    const frmctrl = this.attachment.value
    console.info('FileUploader >> data: ', this.attachment)
    console.info('FileUploader >> file: ', f)
    console.info('FileUploader >> filename: ', f.name)
    this.newAttachment.next(f)
  }
}
