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

  preventPress(evt) {
    if (this.config.inputType.type === 'number') {
      if (evt && evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    }
  }

  preventPaste(evt) {
    if (this.config.inputType.type === 'number') {
      evt.preventDefault();
    }
  }
}
