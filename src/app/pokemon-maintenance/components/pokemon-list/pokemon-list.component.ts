import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Cards } from '../../models/cards';
import { Observable } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public cards$: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.cards$ = this.pokemonService.getPokemons();
  }
}
