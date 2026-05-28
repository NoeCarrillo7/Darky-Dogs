import { Component } from '@angular/core';
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-eventos',
  imports: [NavBar, Footer],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {

}
