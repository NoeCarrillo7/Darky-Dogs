import { Component } from '@angular/core';
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Footer } from '../../shared/footer/footer';
import { Seccion1 } from "../../components/eventos/seccion1/seccion1";

@Component({
  selector: 'app-eventos',
  imports: [NavBar, Footer, Seccion1],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {

}
