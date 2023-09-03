import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMayus]'
})
export class MayusDirective {

  constructor(public ref: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    console.log(this.ref)
     this.ref.nativeElement.value = event.target.value.toUpperCase();
  }

}
