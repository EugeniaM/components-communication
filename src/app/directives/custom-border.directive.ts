import {Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appCustomBorder]'
})
export class CustomBorderDirective implements OnInit {
  @HostBinding('style.border') customBorderStyle = 'none';
  @Input() defaultBorder: string = 'none';
  @Input('appCustomBorder') borderColor = '2px solid red';

  constructor(
    private element: ElementRef,
    private renederer: Renderer2
  ) {}

  ngOnInit() {
    // this.element.nativeElement.style.border = '2px solid green';
    // this.renederer.setStyle(this.element.nativeElement, 'border', '2px solid blue')
    this.customBorderStyle = this.defaultBorder;
  }

  @HostListener('mouseenter') mouseenter() {
    // this.renederer.setStyle(this.element.nativeElement, 'border', '2px solid blue');
    this.customBorderStyle = this.borderColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renederer.setStyle(this.element.nativeElement, 'border', 'none');
    this.customBorderStyle = this.defaultBorder;
  }
}
