import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-loading',
  templateUrl: './pokemon-loading.component.html',
  styleUrls: ['./pokemon-loading.component.css']
})
export class PokemonLoadingComponent {
  @Input() message: string;
}
