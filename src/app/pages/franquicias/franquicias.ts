import { Component } from '@angular/core';
import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Footer } from '../../shared/footer/footer';
import { Seccion1Franquicias } from "../../components/franquicias/seccion1-franquicias/seccion1-franquicias";
import { Seccion2Franquicias } from "../../components/franquicias/seccion2-franquicias/seccion2-franquicias";
import { Seccion3Franquicias } from "../../components/franquicias/seccion3-franquicias/seccion3-franquicias";
import { Seccion4Franquicias } from "../../components/franquicias/seccion4-franquicias/seccion4-franquicias";
import { Seccion5Franquicias } from "../../components/franquicias/seccion5-franquicias/seccion5-franquicias";
@Component({
  selector: 'app-franquicias',
  imports: [NavBar, Footer, Seccion1Franquicias, Seccion2Franquicias, Seccion3Franquicias, Seccion4Franquicias, Seccion5Franquicias],
  templateUrl: './franquicias.html',
  styleUrl: './franquicias.css',
})
export class Franquicias {

}
