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

  //au survol de la souris la bordure change de couleur
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor)
  }

  //couleur initiale des cards
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
  }

  //déclaration de la taille de la card par défault
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  //Fonction qui permet de changer la couleur de la bordure des cards
  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`
  }

}
