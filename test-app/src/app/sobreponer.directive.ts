import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSobreponer]'
})
export class SobreponerDirective {
  public color: string;

  constructor(
    private readonly renderer: Renderer,
    private readonly element: ElementRef
  ) {
    this.color = this.element.nativeElement.style.backgroundColor;
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')
  public mouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave')
  public mouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
