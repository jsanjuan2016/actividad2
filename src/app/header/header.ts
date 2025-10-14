import { Component, inject  } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common'; 

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private location = inject(Location);

  isCategoriasOpen: boolean = false;
  toggleCategoriasMenu(): void {
    this.isCategoriasOpen = !this.isCategoriasOpen;
  }

  constructor() {
    console.log("PATH: "+ this.location.path());
  }

  isActiveRoute(route: string): string {
    return this.location.path() === route ? "active" : "";
  }
}
