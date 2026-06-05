import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seccion5',
  imports: [],
  templateUrl: './seccion5.html',
  styleUrls: ['./seccion5.css'],
})
export class Seccion5 {
  abrirUber(): void {
    const url = `https://www.ubereats.com/store/darky-dogs-queretaro/EBZ8FD5tTGimpOBU88D8Zw`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }



  ngAfterViewInit(): void {
    const elementos = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add('show');
          observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -20% 0px'
    });

    elementos.forEach(elemento => {
      observer.observe(elemento);
    });
  }
}
