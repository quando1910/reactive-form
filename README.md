# ANGULAR Reactive Form

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Install Package

`npm install @theflames/reactive-form`

- Open the Parent Module and import module `ReactiveFormModule` from `@theflames/reactive-form`. the command line like: 
`import { ReactiveFormModule } from '@theflames/reactive-form'`
- Push this module in the `import` property of NgModule.
- The component named `<reactive-form></reactive-form>`. It have some attributes and events:
  - [configForm]: need a json config for build UI of form.
  - [components]: help us custom the input components. Please read the document below for clear this function.
  - (submit): an event when user click submit form.
- You need to settings the config file. This file will help reactive form build their input.
```
{
  `form`: { // config some common things of form
    `submitButton`: {
      `title`: string, // Required, Setting text of submit button
      `disabledInit`: Boolean // Required, Setting disable State in the beginning.
    }
  `config`: { 
    // Required, contains all settings of Input form. Settings can create Input (with types: text, number, password), Select, File, FormGroup, FormArray .
    `label`: string, // Optional, This key affect with label name in Form.
    `key`: string, // Required, This key is very important. It will use a property in result object.
  `inputType`: {
    // Optional, This key define the way we want to input data. You can skip `inputType` in the case have children as FormGroups or FormArrays.
    `name`: string, // Required, This key define which kind of input `input | file | select`.
    `type`: string, // Optional, This key define the subtype of an input.  With `name`: `input`, `type` will be  `text | number | password`.
    `placeholder`: string, // Optional, fill the placeholder if you want.
    `hidden`: boolean; Optional, set it true, the input will be hidden.
    `data`: Array<string | SelectBoxData> // Optional, Provided the data for selectBox. It accepts the Array of string of object `{text: string; value: number|string}`
  };
  `disabled`: boolean // Optional, Set it true, This key will disabled input.
  `value`: any, // Optional, Init the data in beginning.
  `validation`: ValidatorFn[], // Optional, Contains all validations of an input. We pass the validators of Reactive Forms.
  `errors`: any, //Optional, Base on the way `reactive forms` push errors, we need define errors follow the key of `reactive forms Errors` .
  `groups`: Array<FieldConfig>, //Optional, If you want to add  FormGroup, use it.
  `limit`: number, // Optional, use for Form Array, it define how many form Array render on beginning
  `arrays`: Array<any> // Optional, Setting the input for Form Array.
  }
}
```

| key                            | Type          | Required? | Description                                                                                                      | Default Value | List Value                                               |
|--------------------------------|---------------|-----------|------------------------------------------------------------------------------------------------------------------|---------------|----------------------------------------------------------|
| form.submitButton.title        | string        | false     | Setting text of submit button                                                                                    | 'Submit'      | type what you want                                       |
| form.submitButton.disabledInit | boolean       | false     | Setting disable State in the beginning.                                                                          | false         | false | true                                             |
| config.label                   | string        | false     | This key affect with label name in Form.                                                                         | null          | type what you want                                       |
| config.key                     | string        | true      | This key is very important. It will use a property in result object                                              | null          | type what you want                                       |
| inputType.name                 | string        | true      | This key define which kind of input.                                                                             | null          | input | file | select | textarea | checkbox | radio      |
| inputType.type                 | string        | false     | This key define the subtype of an input                                                                          | null          | `input` - `text | number | password`                     |
| inputType.placeholder          | string        | false     | The placeholder text for `input`, `textarea`, `select`                                                           | null          | type what you want                                       |
| inputType.hidden               | boolean       | false     | Set it true, the input will be hidden                                                                            | false         | false | true                                             |
| inputType.data                 | array         | false     | Provided the data for selectBox. It accepts the Array of string or object `{text: string; value: number|string}` | []            | input data follow the parttern                           |
| disabled                       | boolean       | false     | Set it true, This key will disabled input.                                                                       | false         | false | true                                             |
| value                          | any           | false     | Init the data in beginning.                                                                                      | null          | type what you want                                       |
| validation                     | ValidatorFn[] | false     | Contains all validations of an input. We pass the validators of Reactive Forms.                                  | []            | Validators of Angular Reactive Form or custom validators |
|                                |               |           |                                                                                                                  |               |                                                          |

## How to custom UI
#### Custom Layout
The layout form have many inputs. Each `input` includes 3 parts: `labelContent`, `formContent`, `errorContent`. 
It show as default with 3 proper `<ng-content></ng-content>`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Develop Library

You can

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
