import { Validators } from '@angular/forms';
import ReactiveValidator from 'projects/reactive-form/src/lib/customValidator/validator';

export default {
  form: {
    submitButton: {
      title: 'Submit',
      disabledInit: false // default is false
    }
  },
  config: [
    {
      label: 'Name',
      key: 'name',
      inputType: {
        name: 'input',
        type: 'text',
        placeholder: 'Input name',
        hidden: false
      },
      validation: [Validators.required, Validators.minLength(4)],
      errors: {
        required: 'name is required',
        minlength: 'name is minLengh',
      },
    },
    {
      label: 'Phone',
      key: 'phone',
      validation: [Validators.required, Validators.minLength(10), Validators.pattern(/123232/)],
      errors: {
        required: 'phone is required',
        minlength: 'phone is minLengh',
        pattern: 'phone is not right pattern'
      },
      groups: [
        {
          // label: 'Name',
          key: 'code',
          inputType: {
            name: 'input',
            type: 'number',
            placeholder: 'code',
            hidden: false
          },
          // validation: [Validators.required, Validators.minLength(4)],
        },
        {
          // label: 'Name',
          key: 'phone',
          inputType: {
            name: 'input',
            type: 'number',
            placeholder: 'Phone number',
            hidden: false
          },
          // validation: [Validators.required, Validators.minLength(4)],
        }
      ]
    },
    {
      label: 'Password',
      key: 'password',
      inputType: {
        name: 'input',
        type: 'password',
        placeholder: 'Input password',
        hidden: false,
      },
      validation: [Validators.required, Validators.minLength(10)],
      errors: {
        required: 'password is required',
        minlength: 'password is minLengh',
      }
    },
    {
      label: 'School',
      key: 'school',
      inputType: {
        name: 'select',
        placeholder: 'Select first',
        hidden: false,
        data: [
          'Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'
        ]
      },
      validation: [Validators.required, Validators.minLength(10)],
      errors: {
        required: 'password is required',
        minlength: 'password is minLengh',
      }
    },
    {
      label: 'Upload File',
      key: 'image',
      inputType: {
        name: 'file',
      },
      validation: [Validators.required, ReactiveValidator.requiredFileType('jpg')],
      errors: {
        required: 'file image is required',
        requiredFileType: 'Not the type of image'
      }
    },
    {
      label: 'SchoolKey',
      key: 'school',
      inputType: {
        name: 'select',
        placeholder: 'Select first',
        hidden: false,
        data: [
          {text: 'abc', value: 0},
          {text: 'zss', value: 1},
          {text: '12zxcv', value: 2}
        ]
      },
      validation: [Validators.required, Validators.minLength(10)],
      errors: {
        required: 'password is required',
        minlength: 'password is minLengh',
      }
    },
    {
      label: 'Array',
      key: 'items',
      limit: 2,
      arrays: [
        {
          label: 'Name Item',
          key: 'name',
          inputType: {
            name: 'input',
            type: 'text',
            placeholder: 'code',
            hidden: false
          },
        },
        {
          label: 'Type Item',
          key: 'type',
          inputType: {
            name: 'input',
            type: 'number',
            placeholder: 'Phone number',
            hidden: false
          },
        }
      ],
      validation: [Validators.required, Validators.minLength(10)],
      errors: {
        required: 'password is required',
        minlength: 'password is minLengh',
      }
    },
    {
      label: 'Checkbox',
      key: 'checkbox',
      inputType: {
        name: 'checkbox',
        template: {
          content: 'ádfasdfasdf'
        },
        hidden: false
      },
      validation: [Validators.requiredTrue],
      errors: {
        required: 'checkbox is required',
      }
    },
    {
      label: 'Radio Btn',
      key: 'checkRadio',
      inputType: {
        name: 'radio',
        data: [
          {text: 'abc', value: 0},
          {text: 'zss', value: 1},
          {text: '12zxcv', value: 2}
        ],
        hidden: false
      },
      validation: [Validators.required],
      errors: {
        required: 'radio is required',
      }
    },
    {
      label: 'Fill Description',
      key: 'description',
      inputType: {
        name: 'textarea',
        cols: 50,
        rows: 4,
        hidden: false,
        placeholder: 'asdfasdfasfd'
      },
      // disabled: true,
      // value: 123123123123132,
      validation: [Validators.required],
      errors: {
        required: 'description is required',
      }
    }
  ]
};
