import { RouterLink, ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicsumService } from '../services/picsum.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Photo {
  id: number;
  url: string;
  author: Observable<string>;
}

@Component({
  selector: 'app-galeria-paginada',
  imports: [RouterLink, CommonModule],
  templateUrl: './galeria-paginada.html',
  styleUrl: './galeria-paginada.css'
})
export class GaleriaPaginada implements OnInit {

  private imageService = inject(PicsumService);
  private activatedRoute = inject(ActivatedRoute);
  
  // Índices de imágenes
  imgIndex: number[] = [];
  // Todas las fotos
  allPhotos: Photo[] = [];
  // Fotos mostradas en la página actual
  photos: Photo[] = [];
  
  // Configuración de paginación
  currentPage: number = 1;
  itemsPerPage: number = 9; // Número de imágenes por página
  totalPages: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.initializePhotos();
    this.calculateTotalPages();
    
    // Verificar si hay un parámetro de página en la URL
    const pageParam = this.activatedRoute.snapshot.queryParams['page'];
    if (pageParam) {
      const page = parseInt(pageParam, 10);
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
    
    this.loadPhotosForPage();
  }

  private initializePhotos(): void {
    // Inicializar el array de índices de imágenes
    this.imgIndex = [];
    for (let i = 0; i < 1084; i++) {
        this.imgIndex.push(i);
    }

    this.allPhotos = this.imgIndex.map(id => ({
      id: id,
      url: `https://picsum.photos/id/${id}/300/200`, 
      author: this.imageService.getImageInfo(`https://picsum.photos/id/${id}/info`).pipe( 
        map(info => info.author) 
      )
    }));
  }

  private calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.allPhotos.length / this.itemsPerPage);
  }

  private loadPhotosForPage(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.photos = this.allPhotos.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadPhotosForPage();
    }
  }

  goToFirstPage(): void {
    this.goToPage(1);
  }

  goToLastPage(): void {
    this.goToPage(this.totalPages);
  }

  goToPreviousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  goToNextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  get hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  get hasNextPage(): boolean {
    return this.currentPage < this.totalPages;
  }

  get pageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }
}