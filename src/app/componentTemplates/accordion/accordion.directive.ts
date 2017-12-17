import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAccordionContent]'
})
export class AccordionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
