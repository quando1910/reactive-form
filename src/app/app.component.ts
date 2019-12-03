import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormComponent } from 'projects/reactive-form/src/lib/reactive-form.component';
import { FieldConfig } from 'projects/reactive-form/src/lib/models/field-config.interface';
import { Validators } from '@angular/forms';
import { CustomFormInputFileComponent } from './custom-input-file/custom-form-input-file.component';
import config from './config.data';
import { FormConfig } from 'projects/reactive-form/src/lib/models/form-config.interface';
import { PercentPipe } from '@angular/common';
import { ReactiveFormService } from 'projects/reactive-form/src/lib/reactive-form.service';
import { map } from 'rxjs/operators';

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
    private cd: ChangeDetectorRef,
    private reactiveService: ReactiveFormService
  ) {}

  ngAfterViewInit() {
    this.reactiveService.setCustomComponents(this.components);
    // let previousValid = this.form.valid;
    this.form.changes.subscribe((value) => {
      console.log(value);
    });
    // this.form.setDisabled('submit', true);
    // this.form.setValue('name', 'Todd Motto');
    // this.cd.detectChanges();
  //   setTimeout(() => {
  //     this.configForm = {
  //       form: {
  //         submitButton: {
  //           extraClass: 'btn',
  //         },
  //         requiredSymbol: '*',
  //         matchField: ['password', 'confirmPassword'], // [['password', 'confirmPassword'],['email1', 'confirmEmail1']]
  //       },
  //       config: [
  //       {
  //         label: 'country_code',
  //         key: 'country_code',
  //         inputType: {
  //           name: 'input',
  //           type: 'number',
  //           placeholder: 'code',
  //           hidden: false
  //         },
  //         validation: [Validators.required, Validators.minLength(10), Validators.pattern(/123232/)],
  //         errors: {
  //           required: 'phone is required',
  //           minlength: 'phone is minLengh',
  //           pattern: 'phone is not right pattern'
  //         },
  //       },
  //       {
  //         label: 'Private Infomation',
  //         groups: [
  //           {
  //             label: 'Your name',
  //             key: 'name',
  //             inputType: {
  //               name: 'input',
  //               type: 'text',
  //               placeholder: 'Name',
  //               hidden: false
  //             },
  //             validation: [Validators.required, Validators.minLength(10), Validators.pattern(/123232/)],
  //             errors: {
  //               required: 'adsasfsdphone is required',
  //               minlength: 'phone is minLengh',
  //               pattern: 'phone is not right pattern'
  //             },
  //           }
  //         ]
  //       },
  //     ]
  //   };
  //   // setTimeout(() => {
  //     // this.form.changes.subscribe((data) => {
  //     //   console.log(data);
  //     // });
  //   // }, 2000);
  // }, 3000);
}

  onSubmit(value: {[name: string]: any}) {
    console.log('app', this.form);
  }

  removeTest() {
    const config1: any = [
      {
        label: 'level',
        groups: [
          {
            label: 'level1',
            key: 'level1',
            groups: [
              {
                label: 'level1_1',
                key: 'level1_1',
                inputType: {
                  type: 'text',
                  name: 'input'
                },
                validation: [],
                errors: {
                },
              },
            ],
            validation: [],
            errors: {
            },
          },
          {
            label: 'level2',
            key: 'level2',
            inputType: {
              type: 'text',
              name: 'input'
            },
            validation: [],
            errors: {
            },
          },
        ],
        validation: [],
        errors: {
        },
    }
  ];
  const b = [{
    label: 'name',
    key: 'name',
    inputType: {
      type: 'text',
      name: 'input'
    },
    validation: [],
    errors: {
    },
  },
  {
    label: 'phone',
    key: 'phone',
    groups: [
      {
        label: 'country_code',
        key: 'country_code',
        inputType: {
          type: 'text',
          name: 'input'
        },
        validation: [],
        errors: {
        },
      },
      {
        label: 'phone_num',
        key: 'phone_num',
        inputType: {
          type: 'text',
          name: 'input'
        },
        validation: [],
        errors: {
        },
      },
    ],
    validation: [],
    errors: {
    },
 }];
  // this.form.inheritConfig = {
  //   ...this.form.inheritConfig,
  //   config: b
  //   };
  this.form.removeController(config1, this.form.form);
  console.log(this.form.form);
  // console.log(this.form.form, this.form.inheritConfig);
  }
}
