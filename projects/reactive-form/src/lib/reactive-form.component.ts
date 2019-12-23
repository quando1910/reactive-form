import { Component, EventEmitter, Input, OnChanges, OnInit, Output, Type, TemplateRef, ElementRef, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { FieldConfig } from './models/field-config.interface';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { Field } from './models/field.interface';
import { FormInputFileComponent } from './components/form-input-file/form-input-file.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormTextAreaComponent } from './components/form-textarea/form-textarea.component';
import { FormConfig } from './models/form-config.interface';
import { Pipe } from '@angular/compiler/src/core';
import { DefaultReactiveForm } from './reactive-form.class';
import { takeUntil } from 'rxjs/operators';
import { ReactiveFormService } from './reactive-form.service';
import { Subject } from 'rxjs';

@Component({
  exportAs: 'reactiveForm',
  selector: 'reactive-form',
  styleUrls: ['reactive-form.component.scss'],
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnChanges, OnInit {
  a: FormConfig;

  private unsubscribe$ = new Subject<void>();

  @Input()
  configForm: any;

  inheritConfig: any;

  @Input()
  customLayout: ElementRef<any>;

  @Input()
  customPipe: Pipe;

  @Input()
  customPipeArgs: any = [];

  // default components
  components: {[type: string]: Type<Field>};

  @Output()
  submitEmitter: EventEmitter<any> = new EventEmitter<any>();

  defaultComp = {
    input: FormInputComponent,
    select: FormSelectComponent,
    file: FormInputFileComponent,
    checkbox: FormCheckboxComponent,
    radio: FormRadioComponent,
    textarea: FormTextAreaComponent
  };

  config: FieldConfig[] = [];
  form: FormGroup;
  submitted: Boolean;
  componentHandler: {[type: string]: Type<Field>};
  preventClick: boolean;
  group: FormGroup;
  cacheValue: any;

  get controls() { return this.config; }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() {
    const value = this.form.value;
    Object.keys(value).forEach(k => {
      value[k] = typeof value[k] === 'string' ? value[k].trim() : value[k];
    });
    return value;
  }
  get f() { return this.form.controls; }

  constructor(
    private reactiveService: ReactiveFormService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.config = this.configForm.config;
    this.inheritConfig = new DefaultReactiveForm(
      this.configForm.form.submitButton.title,
      this.configForm.form.submitButton.disabledInit,
      this.configForm.form.submitButton.preventClick,
      this.configForm.form.submitButton.extraClass,
      this.configForm.form.submitButton.hidden,
      this.configForm.form.matchField,
      this.configForm.form.requiredSymbol,
      this.configForm.config);
    this.form = this.createGroup();
    this.reactiveService.components$.pipe(takeUntil(this.unsubscribe$)).subscribe(comp => {
      if (comp) {
        this.components = comp;
        this.componentHandler = {...this.defaultComp, ...this.components};
      } else {
        this.componentHandler = {...this.defaultComp };
      }
    });
  }

  calculateForm(configForm) {
    this.cacheValue = this.form.value;
    this.config = configForm.config;
    // this.inheritConfig.config = this.config;
    this.inheritConfig = configForm;
  }

  reRenderConfig(configForm, previousConfig = null) {
   this.calculateForm(configForm);
    if (!previousConfig) {
      this.form = this.createGroup();
    } else {
      this.removeController(previousConfig, this.form);
    }
    this.form.patchValue(this.cacheValue || {});
  }

  addController(configForm, previousConfig = null) {
   this.calculateForm(configForm);
    if (previousConfig) {
      this.removeController(previousConfig, this.form);
    }
    this.form = this.updateGroup();
    this.form.patchValue(this.cacheValue || {});
  }


  ngOnChanges(simple: SimpleChanges) {
    if (this.form) {
      if (simple.configForm.currentValue) {
        this.calculateForm(simple.configForm.currentValue);
      }
    //   this.cacheValue = this.form.value;
    //   const controls = Object.keys(this.form.controls);
    //   const configControls = this.controls.map((item) => item.key);
    //   console.log(controls, configControls);
    //   controls
    //     .filter((control) => !configControls.includes(control))
    //     .forEach((control) => this.form.removeControl(control));

    //   configControls
    //     .filter((control) => !controls.includes(control))
    //     .forEach((name) => {
    //       const config = this.config.find((control) => control.key === name);
    //       this.form.addControl(name, this.createControl(config));
    //     });
    }
  }

  createGroup() {
    this.group = this.fb.group({});
    this.groupRecursive(this.controls);
    return this.group;
  }

  updateGroup() {
    this.groupRecursive(this.controls);
    return this.group;
  }

  groupRecursive(data) {
    data.forEach(control => {
      if (control.key) {
        if (!this.group.controls[control.key]) {
          this.group.addControl(control.key, this.createControl(control));
        } else {
          const group = this.group.controls[control.key];
          if (group['controls']) {
            const groupControl: any = group['controls'];
            const a = this.createControl(control) as FormGroup;
            Object.keys(groupControl).forEach(x => a.addControl(x, groupControl[x]));
            this.group.removeControl(control.key);
            this.group.addControl(control.key, a);
          }
        }
      } else {
        this.groupRecursive(control.groups);
      }
    });
  }


  /*
    This function remove the control of form with the format of config, passing data is the array of field
    you want to remove Control.
  */
  removeController(data, form, key = null) {
    data.forEach((item: any) => {
      const record: any = item.key ? form.get(item.key) : form;
      if (item.groups) {
        this.removeController(item.groups, record, item.key ? item.key : key);
      } else if (item.arrays) {
      } else {
        form.removeControl(item.key);
        if ((key && !form.controls) || (key && !Object.keys(form.controls).length)) {
          form._parent.removeControl(key);
        }
      }
    });
  }

  createControl(config: FieldConfig) {
    if (config.groups && config.groups.length >= 0) {
      return this.createFormGroup(config.groups);
    } else if (config.arrays && config.arrays.length >= 0) {
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
    if (this.inheritConfig.form.submitButton.preventClick) {
      if (!this.preventClick) {
        this.submitEvent();
        this.preventClick = true;
        this.preventConsecutiveClick();
      }
    } else {
      this.submitEvent();
    }
  }

  submitEvent() {
    this.submitted = true;
    event.preventDefault();
    event.stopPropagation();
    this.submitEmitter.emit(this.value);
  }

  preventConsecutiveClick() {
    setTimeout(() => (this.preventClick = false), 3000);
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
