import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { TemplateFormComponent } from '../template-form/template-form.component';

@Component({
  selector: 'form-textarea',
  styleUrls: ['form-textarea.component.scss'],
  templateUrl: './form-textarea.component.html'
})

export class FormTextAreaComponent extends TemplateFormComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
