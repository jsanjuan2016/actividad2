import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ContentWrapper } from './content-wrapper/content-wrapper';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ContentWrapper],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('actividad2');
}
