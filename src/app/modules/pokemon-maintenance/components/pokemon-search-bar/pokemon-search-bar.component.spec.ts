/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { PokemonSearchBarComponent } from './pokemon-search-bar.component';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
class MockPokemonService extends PokemonService {
  override getPokemons(name: string = '') {
  }
}

fdescribe('PokemonSearchBarComponent', () => {
  let component: PokemonSearchBarComponent;
  let fixture: ComponentFixture<PokemonSearchBarComponent>;
  let pokemonService: PokemonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PokemonService, useClass: MockPokemonService },
      ],
      imports: [HttpClientModule],
      declarations: [ PokemonSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should trigger onInputChanged', () => {
  //   const ev = {
  //     target: {
  //       value: ''
  //     }
  //   }

  //   spyOn(pokemonService, 'getPokemons');
  //   component.onInputTextChanged(ev);
  //   expect(pokemonService.getPokemons).toHaveBeenCalled();
  // });
});
