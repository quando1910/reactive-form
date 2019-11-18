import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';


@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  submitted: Boolean;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  @Input()
  components: {[type: string]: Type<Field>};

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
      this.component.instance.submitted = this.submitted;
      this.component.instance.renderClass();
      this.component.instance.renderClassContainer();
    }
  }

  ngOnInit() {
    if (!this.components[this.config.inputType.name]) {
      const supportedTypes = Object.keys(this.components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.inputType.name}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(this.components[this.config.inputType.name]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.submitted = this.submitted;
  }
}
