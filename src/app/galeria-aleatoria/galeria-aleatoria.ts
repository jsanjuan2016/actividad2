import { RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicsumService } from '../services/picsum.service';
import { Observable } from 'rxjs';
import { map, max } from 'rxjs/operators';

interface Photo {
  id: number;
  url: string;
  author: Observable<string>; 
}

@Component({
  selector: 'app-galeria-aleatoria',
  imports: [RouterLink, CommonModule],
  templateUrl: './galeria-aleatoria.html',
  styleUrl: './galeria-aleatoria.css'
})

export class GaleriaAleatoria implements OnInit {

  private imageService = inject(PicsumService);
  
  photos: Photo[] = [];
  numeroAleatorioEntero: number = 0;

  constructor() { }

  ngOnInit(): void {

    this.numeroAleatorioEntero = Math.floor(Math.random() * 1079); //Numero aleatorio entre 0 y 1078
    
    for (let i = 0; i < 6; i++) {
      this.photos.push({
        id: this.numeroAleatorioEntero + i, //id: id,
        url: `https://picsum.photos/id/${this.numeroAleatorioEntero + i}/300/200`,
        author: this.imageService.getImageInfo(`https://picsum.photos/id/${this.numeroAleatorioEntero + i}/info`).pipe(
          map(info => info.author)
        )
      });
    }
    console.table(this.photos.map(photo => ({ id: photo.id, url: photo.url, author: photo.author.subscribe(name => console.log(name)) })));

  }
}