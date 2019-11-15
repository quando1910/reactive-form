import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormComponent } from 'projects/reactive-form/src/lib/reactive-form.component';
import { FieldConfig } from 'projects/reactive-form/src/lib/models/field-config.interface';
import { Validators } from '@angular/forms';
import { CustomFormInputFileComponent } from './custom-input-file/custom-form-input-file.component';
import config from './config.data';
import { FormConfig } from 'projects/reactive-form/src/lib/models/form-config.interface';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ReactiveFormComponent) form: ReactiveFormComponent;

  configForm: FormConfig = config;
  myPipe = PercentPipe;

  // custom Components here
  components = {
    file: CustomFormInputFileComponent
  };

  constructor(
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    // let previousValid = this.form.valid;
    // this.form.changes.subscribe(() => {
    //   if (this.form.valid !== previousValid) {
    //     previousValid = this.form.valid;
    //     this.form.setDisabled('submit', !previousValid);
    //   }
    // });
    // this.form.setDisabled('submit', true);
    // this.form.setValue('name', 'Todd Motto');
    this.cd.detectChanges();
  }

  onSubmit(value: {[name: string]: any}) {
    console.log('app', value);
  }
}
