import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject, tap } from 'rxjs';

import { Pokemon } from '../models/pokemon';
import { ArrayFunctions } from '../../../shared/utils/array-functions';
import { PokemonsStore } from '../../../data-access/pokemons.store';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonChanged = new BehaviorSubject<Pokemon[]>([]);
  pokemon$ = this.pokemonChanged.asObservable();

  constructor(private pokemonsStore: PokemonsStore) {
    this.searchPokemon();
  }

  searchPokemon(name?: string) {
    this.pokemonsStore
      .get(name)
      .pipe(
        map((cards) =>
          cards.sort((a, b) => ArrayFunctions.orderBy(a, b, 'name'))
        ),
        tap((cards) => this.pokemonChanged.next(cards))
      )
      .subscribe();
  }

  getPokemonDetails(id: string): Observable<Pokemon> {
    return this.pokemonsStore.getById(id);
  }

  getSearchedPokemon() {
    return this.pokemon$;
  }
}
