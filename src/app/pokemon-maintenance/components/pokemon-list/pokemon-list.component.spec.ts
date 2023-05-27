/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokemonListComponent } from './pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, of } from 'rxjs';
import { PokemonSearchBarComponent } from '../pokemon-search-bar/pokemon-search-bar.component';
import { PokemonLoadingComponent } from '../pokemon-loading/pokemon-loading.component';
import { Pokemon } from '../../models/pokemon';
import { POKEMON_RESPONSE_MOCK } from 'src/app/mocks/pokemon-response-mock';
import { Router } from '@angular/router';

fdescribe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  const mockPokemonService = {
    getPokemons: jasmine.createSpy(),
    getSearchedPokemon: jasmine.createSpy(),
  };
  const mockRouter = {
    navigate: jasmine.createSpy(),
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: PokemonService, useValue: mockPokemonService},
        {provide: Router, useValue: mockRouter},
      ],
      imports: [HttpClientModule],
      declarations: [
        PokemonListComponent,
        PokemonSearchBarComponent,
        PokemonLoadingComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch pokemons and fill the observable cards$ in ngOnInit', () => {
    component.ngOnInit();
    expect(mockPokemonService.getPokemons).toHaveBeenCalled();
    expect(component.cards$).not.toBe(of(null));
  });

  it('should navigate to pokemon-details route', () => {
    let pokemon: Pokemon = POKEMON_RESPONSE_MOCK;
    component.onCardSelected(pokemon);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['pokemon-details', pokemon.id]);
  });
});
