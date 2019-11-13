import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AnimeService {

  constructor( private http: HttpClient ) {  }

  getAnime(): Observable<Object[]> {
    return this.http.get<Object[]>('http://localhost:8000/api/anime');
  }
}
