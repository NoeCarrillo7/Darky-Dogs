import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimate implements OnInit, OnDestroy{

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initObserver();
  }

  private initObserver(): void {
    const options = {
      root: null, 
      rootMargin: '0px',
      // Bajamos el umbral a 0.1 para que responda más rápido al hacer scroll inverso
      threshold: 0.1 
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Entra en pantalla: Añade la clase y dispara la animación
          this.renderer.addClass(this.el.nativeElement, 'visible');
        } else {
          // Sale de pantalla: Quita la clase para resetear el estado de la animación
          this.renderer.removeClass(this.el.nativeElement, 'visible');
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

}
