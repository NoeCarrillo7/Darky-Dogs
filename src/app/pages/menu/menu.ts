import { Component } from '@angular/core';
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Seccion5 } from '../../components/inicio/seccion5/seccion5';
import { Seccion2 } from '../../components/menu/seccion2/seccion2';
import { Seccion3 } from '../../components/menu/seccion3/seccion3';
import { Seccion4 } from '../../components/menu/seccion4/seccion4';
import { Footer } from '../../shared/footer/footer';


@Component({
  selector: 'app-menu',
  imports: [NavBar, Seccion2, Seccion3, Seccion4, Seccion5, Footer],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
