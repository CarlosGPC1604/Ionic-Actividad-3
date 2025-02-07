import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'c5582108b36e01253e9eda0441328c5f';
  private accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTU4MjEwOGIzNmUwMTI1M2U5ZWRhMDQ0MTMyOGM1ZiIsIm5iZiI6MTczODg4NTM3NC40ODEsInN1YiI6IjY3YTU0OGZlZjE5NmE3M2FlNzY3MDAwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcjLDCuYWkymnknjxU1UxdfbzjWQwEytaBDdwxEdw0M';

  constructor(private http: HttpClient) { }

  getPeliculasPopulares(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`, { headers });
  }
}