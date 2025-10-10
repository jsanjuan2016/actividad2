import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Galeria } from './galeria/galeria';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Galeria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('actividad2');
}
