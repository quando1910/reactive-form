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
Example JSON: 
```
{
  `form`: { // config some common things of form
    `submitButton`: {
      `title`: string,
      `disabledInit`: boolean
    },
  `config`: { 
    // Required, contains all settings of Input form. Settings can create Input (with types: text, number, password), Select, File, FormGroup, FormArray .
    `label`: string,
    `key`: string,
  `inputType`: {
    // Optional, This key define the way we want to input data. You can skip `inputType` in the case have children as FormGroups or FormArrays.
    `name`: string,
    `type`: string,
    `placeholder`: string,
    `hidden`: boolean,
    `data`: Array<string | SelectBoxData>
  };
  `disabled`: boolean,
  `value`: any,
  `validation`: ValidatorFn[],
  `errors`: any,
  `groups`: Array<FieldConfig>,
  `limit`: number,
  `arrays`: Array<any>
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
| errors                         | Object        | false     | Base on the way `reactive forms` push errors.                                                                    | {}            | define errors follow the key of `reactive forms Errors`  |
| groups                         | Array         | false     | When you want to add FormGroup.                                                                                  | []            |                                                          |
| limit                          | number        | false     | For `Form Array`, it define how many form Array render on beginning                                              | 0             | number                                                   |
| arrays                         | []            | false     | For `Form Array`, setting the input for Form Array.                                                              | []            |                                                          |
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
