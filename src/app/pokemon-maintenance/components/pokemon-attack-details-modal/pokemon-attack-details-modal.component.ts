import { Component, Input, ViewChild } from '@angular/core';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { PokemonAttacks } from '../../models/pokemon-attacks';

@Component({
  selector: 'app-pokemon-attack-details-modal',
  templateUrl: './pokemon-attack-details-modal.component.html',
  styleUrls: ['./pokemon-attack-details-modal.component.scss']
})
export class PokemonAttackDetailsModalComponent {
  @Input() attacks: PokemonAttacks;

  @ViewChild('bsModal') public bsModal: ModalDirective;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }
}
