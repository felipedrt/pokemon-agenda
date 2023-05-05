import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-maintenance',
  templateUrl: './pokemon-maintenance.component.html',
  styleUrls: ['./pokemon-maintenance.component.css']
})
export class PokemonMaintenanceComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.pokemontcg.io/v1/cards').subscribe((data) => {
      console.log(data);
    })
  }

}
