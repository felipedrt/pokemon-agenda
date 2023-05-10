import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../models/pokemon-details';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PokemonAttackDetailsModalComponent } from '../pokemon-attack-details-modal/pokemon-attack-details-modal.component';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon$: Observable<PokemonDetail>;
  public bsModalRef?: BsModalRef;


  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.pokemon$ = this.pokemonService.getPokemonDetails(data.id);
    });
  }

  showAttackDetails(attack: any) {
    const initialState: ModalOptions = {
      initialState: {
        attacks: attack,
      },
      class: 'modal-lg'
    };
    this.bsModalRef = this.modalService.show(
      PokemonAttackDetailsModalComponent,
      initialState
    );
  }
}
