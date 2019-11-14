import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-textarea',
  styleUrls: ['form-textarea.component.scss'],
  templateUrl: './form-textarea.component.html'
})

export class FormTextAreaComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
