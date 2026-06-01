import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seccion2',
  imports: [],
  templateUrl: './seccion2.html',
  styleUrls: ['./seccion2.css'],
})
export class Seccion2 implements AfterViewInit {
  constructor() { }

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
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    elementos.forEach(elemento => {
      observer.observe(elemento);
    });
  }
}
