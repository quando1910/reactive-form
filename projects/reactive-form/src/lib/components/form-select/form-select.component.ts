import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { TemplateFormComponent } from '../template-form/template-form.component';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  templateUrl: './form-select.component.html'
})
export class FormSelectComponent extends TemplateFormComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.config.inputType.data) {
      this.config.inputType.data = this.config.inputType.data.map(x => typeof x === 'string' ? {text: x, value: x} : x);
    }
  }
}
