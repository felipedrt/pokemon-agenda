import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from '../../shared/api-urls';
import { Cards } from '../models/cards';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Cards>(ApiUrls.POKEMON_URL).pipe(
      map((data) => {
        return data.cards;
      })
    );
  }
}
