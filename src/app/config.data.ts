import { Validators, FormControl } from '@angular/forms';
import { FormConfig } from 'projects/reactive-form/src/lib/models/form-config.interface';

function requiredFileType( type: string ) {
  return function (control: FormControl) {
    const file = control.value;
    if (file) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }
      return null;
    }
    return null;
  };
}

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
      validation: [Validators.required, requiredFileType('jpg')],
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
    }
  ]
};
