import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormInputFileComponent } from './components/form-input-file/form-input-file.component';
import { FileUploadComponent } from './components/form-input-file/file-upload/file-upload.component';
import { ReactiveFormLayoutComponent } from './containers/reactive-form-layout.component';

@NgModule({
  declarations: [
    ReactiveFormComponent,
    DynamicFieldDirective,
    FileUploadComponent,
    FormInputComponent,
    FormInputFileComponent,
    FormSelectComponent,
    ReactiveFormLayoutComponent
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
