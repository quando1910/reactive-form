import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { TemplateFormComponent } from '../template-form/template-form.component';

@Component({
  selector: 'form-radio',
  styleUrls: ['form-radio.component.scss'],
  templateUrl: './form-radio.component.html'
})

export class FormRadioComponent extends TemplateFormComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;

  ngOnInit() {
    this.config.inputType.data = this.config.inputType.data.map(x => typeof x === 'string' ? {text: x, value: x} : x);
  }
}
