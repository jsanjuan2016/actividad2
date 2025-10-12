import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  imports: [RouterLink],
  templateUrl: './photo.html',
  styleUrl: './photo.css'
})
export class Photo {
  private activatedRoute = inject(ActivatedRoute);
  
  Id: string;
  Title: string;
  Url: string;

  constructor() {
    this.Id = this.activatedRoute.snapshot.params['id'];
    this.Title = this.activatedRoute.snapshot.params['title'];
    this.Url = `https://picsum.photos/id/${this.Id}/1024/768`;
  }  
}
