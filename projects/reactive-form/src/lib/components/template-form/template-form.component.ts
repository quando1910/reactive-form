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
  activeClass: string;
  errorClass: string;

  ngOnInit() {
    this.renderClass();
  }

  renderClass() {
    this.activeClass = `reactive-${this.config.inputType.name} reactive-${this.config.key}-${this.config.inputType.name}`;
    if (this.config.inputType.extraClass) {
      this.activeClass = `${this.activeClass} ${this.config.inputType.extraClass}`;
    }
    this.errorClass = `${this.activeClass} reactive-error-${this.config.inputType.name}`;
    if (this.config.inputType.errorClass) {
      this.errorClass = `${this.errorClass} ${this.errorClass} ${this.config.inputType.errorClass}`;
    }
  }
}
