import { Component, ViewContainerRef, HostListener, ElementRef } from '@angular/core';
import { FormInputFileComponent } from 'projects/reactive-form/src/lib/components/form-input-file/form-input-file.component';


@Component({
  selector: 'custom-form-input-file',
  styleUrls: ['custom-form-input-file.component.scss'],
  templateUrl: './custom-form-input-file.component.html'
})

export class CustomFormInputFileComponent extends FormInputFileComponent {
}
