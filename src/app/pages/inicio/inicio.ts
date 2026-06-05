import { Component } from '@angular/core';
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Seccion2 } from "../../components/inicio/seccion2/seccion2";
import { Seccion3 } from "../../components/inicio/seccion3/seccion3";
import { Seccion4 } from "../../components/inicio/seccion4/seccion4";
import { Seccion5 } from '../../components/inicio/seccion5/seccion5';
import { Footer } from '../../shared/footer/footer';
import { PopUp } from "../../shared/pop-up/pop-up";

@Component({
  selector: 'app-inicio',
  imports: [NavBar, Seccion2, Seccion4, Seccion5, Footer, PopUp],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
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
