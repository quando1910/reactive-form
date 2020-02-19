import { ValidatorFn } from '@angular/forms';

export interface SelectBoxData {
  text: string;
  value: number | string;
}

export interface LabelSetting {
   text: string;
   required: boolean;
   extraClass: string;
   extraClassRequired: string;
 }

export interface FieldConfig {
  /**
     * This key affect with label name in Form.
     */
  label?: string | LabelSetting;
  /**
     * This key is very important. It will use a property in result object.
     */
  key?: string;
  required?: boolean;
  requiredSymbol?: string;
  /**
     * This key define the way we want to input data.
     */
  inputType?: {
    /**
     * This key define which kind of input.
     *
     * `name`: `input | file | select`.
     */
    name: string;
    /**
     * This key define the subtype of an input.
     *
     * With `name`: `input`, `type` will be  `text | number | password`.
     */
    type?: string;
    /**
     * Fill the placeholder if you want.
     */
    placeholder?: string;
    /**
     * Set it true, the input will be hidden.
     */
    hidden?: boolean;
    /**
     * Provided the data for selectBox.
     *
     * It accepts the Array of string of object `{text: string; value: number|string}`
     */
    data?: Array<string | SelectBoxData>;
    /**
     * For Textarea, setting the rows.
     */
    rows?: number | string;
    /**
     * For Textarea, setting the cols.
     */
    cols?: number | string;
    /**
     * For checkbox, setting the UI.
     */
    template?: any;

    extraClass?: any;
    errorClass?: any;
    description?: any;
    minLength?: any;
    maxLength?: any;
    options?: any;
  };
  /**
     * Set it true, This key will disabled input.
     */
  disabled?: boolean;
  /**
     * Init the data in beginning.
     */
  value?: any;
  /**
     * Contains all validations of an input.
     *
     * We pass the validators of Reactive Forms.
     */
  validation?: ValidatorFn[];
  /**
     * Base on the way `reactive forms` push errors, we need define errors follow the key of `reactive forms Errors` .
     */
  errors?: any;
  /**
     * If you want to add  FormGroup, use it.
     */
  groups?: Array<FieldConfig>;
  /**
     * `limit` use for Form Array, it define how many form Array render on beginning
     */
  limit?: number;
  /**
     * Setting the input for form arrays.
     */
  arrays?: Array<any>;
}
