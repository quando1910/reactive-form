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
import { MustMatchDirective } from './components/dynamic-field/must-match.directive';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { DynamicPipe } from './components/dynamic-field/dynamic-pipe';
import { ReactiveFormService } from './reactive-form.service';

@NgModule({
  declarations: [
    DynamicPipe,
    ReactiveFormComponent,
    DynamicFieldDirective,
    FileUploadComponent,
    MustMatchDirective,
    FormInputComponent,
    FormInputFileComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormTextAreaComponent,
    TemplateFormComponent,
    FormCheckboxComponent
  ],
  exports: [
    ReactiveFormComponent,
    FormInputComponent,
    FormInputFileComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormTextAreaComponent,
    FormCheckboxComponent,
    TemplateFormComponent,
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
    ReactiveFormsModule,
  ],
  providers: [
    DynamicPipe,
    ReactiveFormService
  ]
})
export class ReactiveFormModule {}
