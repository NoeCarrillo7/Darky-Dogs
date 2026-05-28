import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Menu } from './pages/menu/menu';
import { Eventos } from './pages/eventos/eventos';
import { Franquicias } from './pages/franquicias/franquicias';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'inicio' },
    { path: 'inicio', component: Inicio },
    { path: 'menu', component: Menu },
    { path: 'eventos', component: Eventos },
    { path: 'franquicias', component: Franquicias }
  ];

