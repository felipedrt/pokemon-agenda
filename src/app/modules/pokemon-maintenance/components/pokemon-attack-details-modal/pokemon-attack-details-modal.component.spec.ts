import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAttackDetailsModalComponent } from './pokemon-attack-details-modal.component';

describe('PokemonAttackDetailsModalComponent', () => {
  let component: PokemonAttackDetailsModalComponent;
  let fixture: ComponentFixture<PokemonAttackDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonAttackDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonAttackDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
