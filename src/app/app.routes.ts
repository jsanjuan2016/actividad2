import { Routes } from '@angular/router';
import { Galeria } from './galeria/galeria';
import { Photo } from './photo/photo';
import { NotFound } from './not-found/not-found';
import { App } from './app';
import { GaleriaAleatoria } from './galeria-aleatoria/galeria-aleatoria';
import { GaleriaPaginada } from './galeria-paginada/galeria-paginada';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: GaleriaAleatoria },
  { path: 'galeria', component: Galeria },
  { path: 'about', component: About },
  { path: 'galeria-paginada', component: GaleriaPaginada },
  { path: 'galeria-aleatoria', component: GaleriaAleatoria },
  { path: 'photo/:id/:title', component: Photo },
  { path: '**', component: NotFound }
];