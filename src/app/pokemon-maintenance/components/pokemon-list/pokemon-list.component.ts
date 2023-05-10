import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Observable } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public cards$: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.pokemonService.getPokemons();
    this.cards$ = this.pokemonService.getSearchedPokemon();
  }

  onCardSelected(pokemon: Pokemon) {
    this.router.navigate(['pokemon-details', pokemon.id]);
  }
}
