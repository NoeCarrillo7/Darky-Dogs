import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {


  private router = inject(Router);

  menuOpen = false;
  toggleMenu() {
    if (window.innerWidth <= 768) {
      this.menuOpen = !this.menuOpen;
    }

  }

  getOrdenarLink() {
    const currentUrl = this.router.url;

    if (currentUrl.includes('/menu')) {
      return { path: ['/menu'], fragment: 'seccion5-menu' };
    } 
    
    return { path: ['/inicio'], fragment: 'seccion5' };
  }

}
