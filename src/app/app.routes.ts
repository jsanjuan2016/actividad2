import { Routes } from '@angular/router';
import { Galeria } from './galeria/galeria';
import { Photo } from './photo/photo';
import { NotFound } from './not-found/not-found';
import { App } from './app';

export const routes: Routes = [
  //{ path: '', component: Galeria, outlet:'rate', pathMatch: 'full', title: 'Galeria - actividad2', data: { app: App } }, //PRUEBAS
  { path: '', component: Galeria, title: 'Galeria - actividad2', data: { app: App } }, //PRUEBAS
  { path: 'galeria', component: Galeria },
  { path: 'photo/:id/:title', component: Photo },
  { path: '**', component: NotFound }
];
