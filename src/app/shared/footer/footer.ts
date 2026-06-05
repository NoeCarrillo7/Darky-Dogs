import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  abrirUbicacion(): void {
    const url = `https://maps.app.goo.gl/JDpoYwDfErDcpMwS6`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  private router = inject(Router);

  // Replicamos la lógica exacta del navbar
  getOrdenarLink() {
    const currentUrl = this.router.url;

    if (currentUrl.includes('/menu')) {
      return { path: ['/menu'], fragment: 'seccion5-menu' };
    } 
    
    return { path: ['/inicio'], fragment: 'seccion5' };
  }
  
}
