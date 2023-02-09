import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = 'green';
  private defaultHeight: number = 180;

  @Input('appBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }

}
