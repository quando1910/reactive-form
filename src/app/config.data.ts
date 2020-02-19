import { Validators } from '@angular/forms';
import { ReactiveFormService } from '@theflames/reactive-form';

const validators = new ReactiveFormService();

export default {
  form: {
    submitButton: {
      extraClass: 'btn',
      // hidden: true
      // preventClick: false
    },
    requiredSymbol: '*',
    matchField: ['password', 'confirmPassword'], // [['password', 'confirmPassword'],['email1', 'confirmEmail1']]
  },
  config: [
    {
      label: 'name',
      key: 'name',
      inputType: {
        name: 'radio',
        data: [
          {
            text: '1',
            disabled: null,
            value: 1
          },
          {
            text: '1',
            value: 2,
            disabled: true
          },
          {
            text: '1',
            value: 3
          }
        ],
        placeholder: 'Country'
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
   },
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
 },
  ]
};
