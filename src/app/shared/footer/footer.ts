import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  
}
