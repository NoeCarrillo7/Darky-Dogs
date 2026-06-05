import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-seccion1-menu',
  imports: [],
  templateUrl: './seccion1-menu.html',
  styleUrl: './seccion1-menu.css',
})
export class Seccion1Menu implements OnInit, OnDestroy{
  @Input() repeatAnimation: boolean = true; 
  
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Se dispara cuando el 20% del contenedor es visible
    };

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.el.nativeElement, 'is-visible');
      } else if (this.repeatAnimation) {
        // Al quitar la clase cuando sale, la animación se reiniciará al volver a entrar
        this.renderer.removeClass(this.el.nativeElement, 'is-visible');
      }
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
