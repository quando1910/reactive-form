import { Component, ViewContainerRef, HostListener, ElementRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input-file',
  styleUrls: ['form-input-file.component.scss'],
  templateUrl: './form-input-file.component.html'
})

export class FormInputFileComponent {
  config: FieldConfig;
  group: FormGroup;
}
