/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { PokemonSearchBarComponent } from './pokemon-search-bar.component';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonSearchBarComponent', () => {
  let component: PokemonSearchBarComponent;
  let fixture: ComponentFixture<PokemonSearchBarComponent>;
  const mockPokemonService = {
    getPokemons: jasmine.createSpy()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PokemonService, useValue: mockPokemonService },
      ],
      imports: [HttpClientModule],
      declarations: [PokemonSearchBarComponent]
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

  it('should trigger onInputChanged by the html', () => {
    const input = fixture.nativeElement.querySelector('#searchInput');
    input.value = '';
    expect(mockPokemonService.getPokemons).toHaveBeenCalled();
  });

  it('should trigger onInputChanged', () => {
    const ev = {
      target: {
        value: ''
      }
    }
    component.onInputTextChanged(ev);
    expect(mockPokemonService.getPokemons).toHaveBeenCalled();
  });
});
