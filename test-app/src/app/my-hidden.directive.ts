import { Directive, ElementRef, Renderer, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyHidden]'
})
export class MyHiddenDirective implements OnInit {
  @Input() public appMyHidden: boolean;

  constructor(
    private readonly elRef: ElementRef,
    private readonly renderer: Renderer) {
  }

  ngOnInit(): void {
    if (this.appMyHidden) {
      this.renderer.setElementStyle(
        this.elRef.nativeElement,
        'display',
        'none');
    }
  }
}
