import { Component, ViewContainerRef, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'template-form',
  template: ``
})

export class TemplateFormComponent implements Field, OnInit {
  submitted: boolean;
  config: FieldConfig;
  group: FormGroup;
  commonClass: string;

  ngOnInit() {
    this.renderClass();
  }

  renderClass() {
    let common = `reactive-${this.config.inputType.name} reactive-${this.config.key}-${this.config.inputType.name}`;
    let error = `reactive-error-${this.config.inputType.name}`;
    if (this.config.inputType.extraClass) {
      common = `${common} ${this.config.inputType.extraClass}`;
    }
    if (this.config.inputType.errorClass) {
      error = `${error} ${this.config.inputType.errorClass}`;
    }
    this.commonClass = this.submitted && this.group.controls[this.config.key].errors ? `${common} ${error}` : common;
  }
}
