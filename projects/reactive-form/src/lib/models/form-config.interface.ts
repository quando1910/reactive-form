import { ValidatorFn } from '@angular/forms';
import { FieldConfig } from './field-config.interface';

export interface FormConfig {
   /**
     * Setting some common feature of form.
     * We can set title and disable behavior submitButton.
     */
  form: {
    submitButton: {
      title?: string,
      disabledInit?: Boolean;
      extraClass?: string;
      preventClick?: Boolean;
      hidden?: Boolean;
    },
    /**
     * Setting retype Field. Input Value is an array of 2 config.key. We also can input multiple array.
     */
    matchField?: Array<string> | Array<Array<string>>;
    requiredSymbol: String;
  };
  /**
     * Config contains all settings of Input form.
     * Settings can create Input (with types: text, number, password), Select, File, FormGroup, FormArray .
     */
  config?: Array<FieldConfig>;
}
