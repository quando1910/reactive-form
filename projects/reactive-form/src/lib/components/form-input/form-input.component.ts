import { Component, ViewContainerRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { TemplateFormComponent } from '../template-form/template-form.component';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  templateUrl: './form-input.component.html'
})

export class FormInputComponent extends TemplateFormComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
