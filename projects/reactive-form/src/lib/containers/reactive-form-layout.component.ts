import { Component, OnInit, Input, TemplateRef, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'form-layout',
  templateUrl: './reactive-form-layout.component.html'
})
export class ReactiveFormLayoutComponent {
  @Input() labelContent: ElementRef<any>;
  @Input() formContent: ElementRef<any>;
  @Input() errorContent: ElementRef<any>;
  @Input() field: any;
}
