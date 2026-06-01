import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seccion3',
  imports: [],
  templateUrl: './seccion3.html',
  styleUrls: ['./seccion3.css'],
})
export class Seccion3 implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          if (target.classList.contains('hidden-extra')) {
            target.classList.add('show-extra');
          }

          if (target.classList.contains('hidden-fries')) {
            target.classList.add('show-fries');
          }
        } else {
          if (target.classList.contains('hidden-extra')) {
            target.classList.remove('show-extra');
          }
          if (target.classList.contains('hidden-fries')) {
            target.classList.remove('show-fries');
          }
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    });

    document.querySelectorAll('.hidden-extra, .hidden-fries').forEach(el => {
      observer.observe(el);
    });
  }
}
