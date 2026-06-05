import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion5-menu',
  imports: [],
  templateUrl: './seccion5-menu.html',
  styleUrl: './seccion5-menu.css',
})
export class Seccion5Menu {
  pedirUber(): void {
    const urlUber = 'https://www.ubereats.com/store/darky-dogs-queretaro/EBZ8FD5tTGimpOBU88D8Zw';
    window.open(urlUber, '_blank', 'noopener,noreferrer');
  }

  llamarNegocio(): void {
    const numeroTelefono = 'tel:+524463758196';
    window.location.href = numeroTelefono;
  }
}
