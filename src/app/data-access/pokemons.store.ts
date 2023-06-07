import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';

import { Card } from '../modules/pokemon-maintenance/models/card';
import { Cards } from '../modules/pokemon-maintenance/models/cards';
import { Pokemon } from '../modules/pokemon-maintenance/models/pokemon';

import { ApiUrls } from '../shared/config/api-urls';
import { ArrayFunctions } from '../shared/utils/array-functions';

@Injectable({
  providedIn: 'root',
})
export class PokemonsStore {
  constructor(private http: HttpClient) {}

  get(name?: string): Observable<Pokemon[]> {
    const reqParam = !!name
      ? { params: new HttpParams().set('name', name) }
      : undefined;

    return this.http
      .get<Cards>(ApiUrls.POKEMON_URL, reqParam)
      .pipe(
        map((data) =>
          data.cards
        )
      );
  }

  getById(id: string): Observable<Pokemon> {
    return this.http
      .get<Card>(`${ApiUrls.POKEMON_URL}/${id}`)
      .pipe(map((data) => data.card));
  }
}
