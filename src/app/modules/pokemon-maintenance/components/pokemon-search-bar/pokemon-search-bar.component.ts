import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-search-bar',
  templateUrl: './pokemon-search-bar.component.html',
  styleUrls: ['./pokemon-search-bar.component.scss']
})
export class PokemonSearchBarComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  onInputTextChanged(ev: any) {
    this.pokemonService.searchPokemon(ev.target.value);
  }
}
