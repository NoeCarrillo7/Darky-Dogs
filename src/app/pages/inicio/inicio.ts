import { Component } from '@angular/core';
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Seccion2 } from "../../components/inicio/seccion2/seccion2";
import { Seccion3 } from "../../components/inicio/seccion3/seccion3";
import { Seccion4 } from "../../components/inicio/seccion4/seccion4";
import { Seccion5 } from '../../components/inicio/seccion5/seccion5';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-inicio',
  imports: [NavBar, Seccion2, Seccion3, Seccion4, Seccion5, Footer],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
