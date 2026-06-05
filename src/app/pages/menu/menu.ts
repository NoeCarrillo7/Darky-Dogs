import { Component } from '@angular/core';
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Footer } from '../../shared/footer/footer';
import { Seccion1Menu } from "../../components/menu/seccion1-menu/seccion1-menu";
import { Seccion2Menu } from "../../components/menu/seccion2-menu/seccion2-menu";
import { Seccion3Menu } from "../../components/menu/seccion3-menu/seccion3-menu";
import { Seccion4Menu } from "../../components/menu/seccion4-menu/seccion4-menu";
import { Seccion5Menu } from "../../components/menu/seccion5-menu/seccion5-menu";
import { PopUp } from "../../shared/pop-up/pop-up";


@Component({
  selector: 'app-menu',
  imports: [NavBar, Footer, Seccion1Menu, Seccion2Menu, Seccion3Menu, Seccion4Menu, Seccion5Menu, PopUp],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  isModalOpen = false;

  ngOnInit(): void {
    // Sin condiciones: cada vez que el componente se destruye y se vuelve a crear (F5)
    // el modal se abrirá automáticamente.
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; 
  }

  manejadorCerrarModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto'; 
  }

  ngOnDestroy(): void {
    // CASO LÍMITE: Si el usuario cambia de página sin cerrar el modal, 
    // debemos asegurarnos de devolverle el scroll a la siguiente pantalla.
    document.body.style.overflow = 'auto';
  }
}
