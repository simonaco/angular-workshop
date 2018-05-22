import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Place } from './place';
import { Http } from '@angular/http';

const PLACES_API = 'https://serverless-places.azurewebsites.net/api';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  constructor(private http: Http) {}

  getPlaces(): Observable<Place[]> {
    return this.http.get(`${PLACES_API}/places`).pipe(map(res => res.json()));
  }
  updatePlace(place: Place): Observable<Place> {
    return this.http
      .put(`${PLACES_API}/place/${place.id}`, place)
      .pipe(map(res => res.json()));
  }

  createPlace(place: Place): Observable<Place> {
    return this.http
      .post(`${PLACES_API}/place`, place)
      .pipe(map(res => res.json()));
  }

  removePlace(place: Place): Observable<Place> {
    return this.http
      .delete(`${PLACES_API}/place/${place.id}`)
      .pipe(map(res => res.json()));
  }
}
