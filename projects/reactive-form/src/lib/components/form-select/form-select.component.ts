import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.scss'],
  templateUrl: './form-select.component.html'
})
export class FormSelectComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;

  ngOnInit() {
    this.config.inputType.data = this.config.inputType.data.map(x => typeof x === 'string' ? {text: x, value: x} : x);
  }
}
