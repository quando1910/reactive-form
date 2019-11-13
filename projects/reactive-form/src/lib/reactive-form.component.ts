import { Component, EventEmitter, Input, OnChanges, OnInit, Output, Type, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { FieldConfig } from './models/field-config.interface';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { Field } from './models/field.interface';
import { FormInputFileComponent } from './components/form-input-file/form-input-file.component';

@Component({
  exportAs: 'reactiveForm',
  selector: 'reactive-form',
  styleUrls: ['reactive-form.component.scss'],
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnChanges, OnInit {
  @Input()
  configForm: any;

  // default components
  @Input()
  components: {[type: string]: Type<Field>};

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  defaultComp = {
    input: FormInputComponent,
    select: FormSelectComponent,
    file: FormInputFileComponent
  };

  config: FieldConfig[] = [];
  form: FormGroup;
  submitted: Boolean;
  componentHandler: {[type: string]: Type<Field>};

  get controls() { return this.config; }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }
  get f() { return this.form.controls; }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.componentHandler = {...this.defaultComp, ...this.components};
    this.config = this.configForm.config;
    this.form = this.createGroup();
    // console.log(this.form);
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.key);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.key === name);
          this.form.addControl(name, this.createControl(config));
        });

    }
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.key, this.createControl(control)));
    return group;
  }

  createControl(config: FieldConfig) {
    if (config.groups && config.groups.length > 0) {
      return this.createFormGroup(config.groups);
    } else if (config.arrays && config.arrays.length > 0) {
      return this.createFormArray(this.createFormGroup(config.arrays), config.limit);
    } else {
      const { disabled, validation, value } = config;
      return this.fb.control({ disabled, value }, validation);
    }
  }

  createFormGroup(obj): FormGroup {
    const group = this.fb.group({});
    obj.forEach(x => group.addControl(x.key, this.createControl(x)));
    return group;
  }

  createFormArray(obj, limit): FormArray {
    const arrays = this.fb.array([]);
    for (let i = 0; i < limit; i++) {
      arrays.push(obj);
    }
    return arrays;
  }

  handleSubmit(event: Event) {
    this.submitted = true;
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item) => {
      if (item.key === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, {emitEvent: true});
  }
}
