import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seccion4',
  imports: [],
  templateUrl: './seccion4.html',
  styleUrls: ['./seccion4.css'],
})
export class Seccion4 implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          if (target.classList.contains('hidden-postre')) {
            target.classList.add('show-postre');
          }
          if (target.classList.contains('hidden-bebidas')) {
            target.classList.add('show-bebidas');
          }
          if (target.classList.contains('hidden-title')) {
            target.classList.add('show-title');
          }
        } else {
          if (target.classList.contains('hidden-postre')) {
            target.classList.remove('show-postre');
          }
          if (target.classList.contains('hidden-bebidas')) {
            target.classList.remove('show-bebidas');
          }
          if (target.classList.contains('hidden-title')) {
            target.classList.remove('show-title');
          }
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    });

    document.querySelectorAll('.hidden-postre, .hidden-bebidas, .hidden-title').forEach(el => {
      observer.observe(el);
    });
  }
}
