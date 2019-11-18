import { FormGroup } from '@angular/forms';
import { FieldConfig } from './field-config.interface';
import { Type } from '@angular/core';

export interface Field {
  config: FieldConfig;
  group: FormGroup;
  components?: {[type: string]: Type<Field>};
  submitted: Boolean;
  renderClass?: Function;
  renderClassContainer?: Function;
}
