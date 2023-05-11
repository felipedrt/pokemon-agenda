/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { POKEMON_RESPONSE_MOCK } from 'src/app/mocks/pokemon-response-mock';

describe('Service: Pokemon', () => {
  let pokemonService: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonService]
    });
  });

  beforeEach(inject([PokemonService], (service: PokemonService) => {
    pokemonService = service;
  }));

  it('should be created', () => {
    expect(pokemonService).toBeTruthy();
  });

  it('should compare all keys from api returned data', (done) => {
    pokemonService.getPokemons();
    pokemonService.pokemonChanged.subscribe((data) => {
      const keys = Object.keys(data[0])
      expect(Object.keys(data[0])).toEqual(Object.keys(POKEMON_RESPONSE_MOCK));

      done();
    })
  });

  it('should fetch all pokemons', (done) => {
    pokemonService.getPokemons();
    pokemonService.pokemonChanged.subscribe((data) => {
      expect(data.length).toBeGreaterThanOrEqual(100);
      done();
    });
  });

  it('should fetch all pokemons and the position 0 should be equal to the model', (done) => {
    pokemonService.getPokemons();
    pokemonService.pokemonChanged.subscribe((data) => {
      expect(data[0]).toEqual(POKEMON_RESPONSE_MOCK);
      done();
    });
  });

  it('should fetch pokemon by name', (done) => {
    pokemonService.getPokemons('Alcremie');
    pokemonService.pokemonChanged.subscribe((data) => {
      expect(data.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });

  it('should fetch pokemon by id', async () => {
    const pokemonId = 'swsh4-177';
    pokemonService.getPokemonDetails(pokemonId).subscribe((data) => {
      expect(data).toEqual(POKEMON_RESPONSE_MOCK);
    });
  });
});
