import { Component } from '@angular/core';
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Footer } from '../../shared/footer/footer';
import { Seccion1Menu } from "../../components/menu/seccion1-menu/seccion1-menu";
import { Seccion2Menu } from "../../components/menu/seccion2-menu/seccion2-menu";
import { Seccion3Menu } from "../../components/menu/seccion3-menu/seccion3-menu";
import { Seccion4Menu } from "../../components/menu/seccion4-menu/seccion4-menu";


@Component({
  selector: 'app-menu',
  imports: [NavBar, Footer, Seccion1Menu, Seccion2Menu, Seccion3Menu, Seccion4Menu],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
