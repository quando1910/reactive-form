import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormInputFileComponent } from './components/form-input-file/form-input-file.component';
import { FileUploadComponent } from './components/form-input-file/file-upload/file-upload.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormTextAreaComponent } from './components/form-textarea/form-textarea.component';

@NgModule({
  declarations: [
    ReactiveFormComponent,
    DynamicFieldDirective,
    FileUploadComponent,
    FormInputComponent,
    FormInputFileComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormTextAreaComponent,
    FormCheckboxComponent
  ],
  exports: [
    ReactiveFormComponent
  ],
  entryComponents: [
    FormInputComponent,
    FormInputFileComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormTextAreaComponent,
    FormCheckboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class ReactiveFormModule { }
