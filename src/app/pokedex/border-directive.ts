import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})

export class BorderDirective {
  @Input('appBorderStyle') damage: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.damage > 50 ? this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px dashed rgb(216, 17, 60)')
      : this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid rgb(46, 194, 53)');

  }
}