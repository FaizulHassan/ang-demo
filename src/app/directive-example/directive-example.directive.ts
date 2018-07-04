import { Directive, ElementRef, HostListener, Host, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveExample]'
})

export class DirectiveExampleDirective {

  @Input() manualColor: string;

  constructor(private el: ElementRef) { }

  private highlightColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightColor(this.manualColor || 'yellow');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlightColor(null);
  }

}
