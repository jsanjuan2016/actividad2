import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photo.html',
  styleUrl: './photo.css'
})
export class Photo {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  
  Id: string;
  Title: string;
  Url: string;
  
  // Información para volver a la galería de origen
  returnUrl: string = '/galeria';
  returnPage: number = 1;
  showBackButton: boolean = false;

  constructor() {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.Title = this.activatedRoute.snapshot.params['title'];
    this.Url = `https://picsum.photos/id/${this.Id}/1024/768`;
    
    // Obtener información de los query parameters
    const queryParams = this.activatedRoute.snapshot.queryParams;
    if (queryParams['returnUrl']) {
      this.returnUrl = queryParams['returnUrl'];
      this.showBackButton = true;

      console.log('Return URL:', this.returnUrl);
    }
    if (queryParams['page']) {
      this.returnPage = parseInt(queryParams['page'], 10) || 1;

      console.log('Return Page:', this.returnPage);
    }
  }

  /**
   * Vuelve a la galería exactamente a la página desde la que se vino
   */
  goBackToGallery(): void {
    // if (this.returnUrl === '/galeria-paginada') {
    //   // Para galería paginada, navegar con el fragmento de página
    //   this.router.navigate([this.returnUrl], { 
    //     fragment: `page-${this.returnPage}`,
    //     queryParams: { page: this.returnPage }
    //   });
    // } else {
    //   // Para otras galerías, navegación simple
    //   this.router.navigate([this.returnUrl]);
    // }
    this.router.navigate([this.returnUrl], { 
      fragment: `page-${this.returnPage}`,
      queryParams: { page: this.returnPage }
    });    
  }
}
