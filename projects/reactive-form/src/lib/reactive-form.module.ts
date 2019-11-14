import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormInputFileComponent } from './components/form-input-file/form-input-file.component';
import { FileUploadComponent } from './components/form-input-file/file-upload/file-upload.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';

@NgModule({
  declarations: [
    ReactiveFormComponent,
    DynamicFieldDirective,
    FileUploadComponent,
    FormInputComponent,
    FormInputFileComponent,
    FormSelectComponent
  ],
  exports: [
    ReactiveFormComponent
  ],
  entryComponents: [
    FormInputComponent,
    FormInputFileComponent,
    FormSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class ReactiveFormModule { }
