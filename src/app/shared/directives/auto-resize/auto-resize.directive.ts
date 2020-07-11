import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoResize]',
})
export class AutoResizeDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('input') autoGrow() {
    console.log('input', this.el, this.el.nativeElement, this.el.nativeElement.height, this.el.nativeElement.scrollHeight);
    this.el.nativeElement.style.height = '5px';
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 4 + 'px';
  }
}
