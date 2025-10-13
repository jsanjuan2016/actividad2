import { Routes } from '@angular/router';
import { Galeria } from './galeria/galeria';
import { Photo } from './photo/photo';
import { NotFound } from './not-found/not-found';
import { App } from './app';
import { GaleriaAleatoria } from './galeria-aleatoria/galeria-aleatoria';
import { GaleriaPaginada } from './galeria-paginada/galeria-paginada';

export const routes: Routes = [
  //{ path: '', component: Galeria, outlet:'rate', pathMatch: 'full', title: 'Galeria - actividad2', data: { app: App } }, //PRUEBAS
  { path: '', component: GaleriaAleatoria, title: 'Galeria - actividad2', data: { app: App } }, //PRUEBAS
  { path: 'galeria', component: Galeria },
  { path: 'galeria-paginada', component: GaleriaPaginada },
  //{ path: 'galeria-aleatoria', loadComponent: () => import('./galeria-aleatoria/galeria-aleatoria').then(m => m.GaleriaAleatoria) },
  { path: 'galeria-aleatoria', component: GaleriaAleatoria },
  { path: 'photo/:id/:title', component: Photo },
  { path: '**', component: NotFound }
];
