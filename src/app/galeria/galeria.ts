import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { routes } from '../app.routes';

interface Photo {
  id: number;
  url: string;
  author: string;
}

@Component({
  selector: 'app-galeria',
  imports: [RouterLink, CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
// export class Galeria {
// }
export class Galeria implements OnInit {

  //Images indexes from picsum.photos desde 0 a 1084
  widthImg: number = 300;
  heightImg: number = 200;
  
  photos: Photo[] = [
    { url: `https://picsum.photos/id/1018/${this.widthImg}/${this.heightImg}`, author: 'Montañas y cielo', id: 1018 },
    { url: `https://picsum.photos/id/1025/${this.widthImg}/${this.heightImg}`, author: 'Cachorro en la hierba', id: 1025 },
    { url: `https://picsum.photos/id/1039/${this.widthImg}/${this.heightImg}`, author: 'Puente y río', id: 1039 },
    { url: `https://picsum.photos/id/1060/${this.widthImg}/${this.heightImg}`, author: 'Tetería', id: 1060 },
    { url: `https://picsum.photos/id/1084/${this.widthImg}/${this.heightImg}`, author: 'Leones marinos', id: 1084 },
    { url: `https://picsum.photos/id/1074/${this.widthImg}/${this.heightImg}`, author: 'https://picsum.photos/id/1074/info', id: 1074 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}