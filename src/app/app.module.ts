import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormModule } from 'projects/reactive-form/src/lib/reactive-form.module';
import { CustomFileUploadComponent } from './custom-input-file/custom-file-upload/custom-file-upload.component';
import { CustomFormInputFileComponent } from './custom-input-file/custom-form-input-file.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormModule } from '@theflames/reactive-form';

@NgModule({
  declarations: [
    AppComponent,
    CustomFormInputFileComponent,
    CustomFileUploadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CustomFormInputFileComponent,
    CustomFileUploadComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
