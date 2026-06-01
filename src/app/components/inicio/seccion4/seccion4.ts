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
    const elementos = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add('show');
        } else {
          target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    });

    elementos.forEach(elemento => {
      observer.observe(elemento);
    });
  }
}
