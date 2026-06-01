import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seccion2',
  imports: [],
  templateUrl: './seccion2.html',
  styleUrls: ['./seccion2.css'],
})
export class Seccion2 implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.hidden-card');

    const observerCards = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add('show-card');
        } else {
          target.classList.remove('show-card');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    });

    cards.forEach(card => {
      observerCards.observe(card);
    });
  }
}
