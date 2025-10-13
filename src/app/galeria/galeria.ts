import { RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicsumService } from '../services/picsum.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Photo {
  id: number;
  url: string;
  author: Observable<string>; //author: string;
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

  private imageService = inject(PicsumService);

  //Images indexes from picsum.photos desde 0 a 1084
  imgIndex: number[] = [1018, 1025, 1039, 1060, 1084, 1074];
  //Image dimensions
  widthImg: number = 300;
  heightImg: number = 200;
  
  photos: Photo[] = [];
  // photos: Photo[] = [
  //   { url: `https://picsum.photos/id/1018/${this.widthImg}/${this.heightImg}`, author: 'Montañas y cielo', id: 1018 },
  //   { url: `https://picsum.photos/id/1025/${this.widthImg}/${this.heightImg}`, author: 'Cachorro en la hierba', id: 1025 },
  //   { url: `https://picsum.photos/id/1039/${this.widthImg}/${this.heightImg}`, author: 'Puente y río', id: 1039 },
  //   { url: `https://picsum.photos/id/1060/${this.widthImg}/${this.heightImg}`, author: 'Tetería', id: 1060 },
  //   { url: `https://picsum.photos/id/1084/${this.widthImg}/${this.heightImg}`, author: 'Leones marinos', id: 1084 },
  //   { url: `https://picsum.photos/id/1074/${this.widthImg}/${this.heightImg}`, author: 'Leona', id: 1074 }
  // ];
  
  // for (let id:number of this.imgIndex) {
  //   this.photos.push({
  //     id: id,
  //     url: `https://picsum.photos/id/${id}/${this.widthImg}/${this.heightImg}`,
  //     author: `https://picsum.photos/id/${id}/info`
  //   });
  // }

  constructor() { }

  ngOnInit(): void {

    this.photos = this.imgIndex.map(id => ({
      id: id,
      url: `https://picsum.photos/id/${id}/${this.widthImg}/${this.heightImg}`,
      //author: `https://picsum.photos/id/${id}/info`
      author: this.imageService.getImageInfo(`https://picsum.photos/id/${id}/info`).pipe(
        map(info => info.author) 
      )
    }));
  
  }
}