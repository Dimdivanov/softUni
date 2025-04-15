import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log('directive is loading');
    console.log(this.elRef.nativeElement);
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');
  }
}
