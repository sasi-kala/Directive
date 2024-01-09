import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective {
    
  constructor(private element : ElementRef) {
     this.element.nativeElement.style.backgroundColor ="lightgreen";

   }

}
