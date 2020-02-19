import { Injectable, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Field } from './models/field.interface';

@Injectable({ providedIn: 'root' })
export class ReactiveFormService {

  components$ = new BehaviorSubject<any>(null);

  constructor() { }

  requiredFileType (type: string) {
    return (control: FormControl) => {
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

  setCustomComponents(value) {
    this.components$.next(value);
  }
}
