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
export class PokemonListComponent  {

  public cards$ = this.pokemonService.pokemon$;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  onCardSelected(pokemon: Pokemon) {
    this.router.navigate(['pokemon-details', pokemon.id]);
  }
}
