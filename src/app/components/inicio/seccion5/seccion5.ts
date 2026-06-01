import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-seccion5',
  imports: [],
  templateUrl: './seccion5.html',
  styleUrl: './seccion5.css',
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
