import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {

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
}
