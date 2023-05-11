import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from '../../shared/api-urls';
import { Cards } from '../models/cards';
import { Observable, Subject, debounceTime, map } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { ArrayFunctions } from 'src/app/shared/array-functions';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonChanged = new Subject<Pokemon[]>;

  constructor(private http: HttpClient) {}

  private searchPokemon(name: string) {
    this.http.get<Cards>(ApiUrls.POKEMON_URL, {
      params: new HttpParams().set('name', name)
    }).subscribe((data) => {
      this.pokemonChanged.next(data.cards);
    })
  }

  getPokemons(name: string = '') {
    if (name) {
      this.searchPokemon(name);
    } else {
      this.http.get<Cards>(ApiUrls.POKEMON_URL).subscribe((data) => {
        this.pokemonChanged.next(data.cards.sort((a, b) => ArrayFunctions.orderBy(a, b, 'name')));
      });
    }
  }

  getPokemonDetails(id: string): Observable<Pokemon> {
    return this.http.get<Card>(`${ApiUrls.POKEMON_URL}/${id}`).pipe(
      map((data) => {
        return data.card;
      })
    );
  }

  getSearchedPokemon() {
    return this.pokemonChanged.asObservable();
  }
}

