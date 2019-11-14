import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { TemplateFormComponent } from '../template-form/template-form.component';

@Component({
  selector: 'form-checkbox',
  styleUrls: ['form-checkbox.component.scss'],
  templateUrl: './form-checkbox.component.html'
})

export class FormCheckboxComponent extends TemplateFormComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
