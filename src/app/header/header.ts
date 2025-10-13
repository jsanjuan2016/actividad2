import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isCategoriasOpen: boolean = false;
  toggleCategoriasMenu(): void {
    this.isCategoriasOpen = !this.isCategoriasOpen;
  }
}
