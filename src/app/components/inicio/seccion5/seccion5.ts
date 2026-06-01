import { Component } from '@angular/core';

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
}
