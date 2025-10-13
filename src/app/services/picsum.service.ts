import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PicsumInfo } from '../models/picsum.info';

@Injectable({
  providedIn: 'root'
})

export class PicsumService {
  //private readonly API_URL = 'https://picsum.photos/id/237/info';

  private http = inject(HttpClient); //Inyeccion de dependencia

  getImageInfo(url: string): Observable<PicsumInfo> { //Metodo que devuelve la información de la imagen
    return this.http.get<PicsumInfo>(url);
  }
}
