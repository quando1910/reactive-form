import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileUploadComponent } from 'projects/reactive-form/src/lib/components/form-input-file/file-upload/file-upload.component';

@Component({
  selector: 'custom-file-upload',
  styleUrls: ['custom-file-upload.component.scss'],
  templateUrl: './custom-file-upload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomFileUploadComponent,
      multi: true
    }
  ]
})

export class CustomFileUploadComponent extends FileUploadComponent {
}
