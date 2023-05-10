import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonMaintenanceComponent } from './pokemon-maintenance.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSearchBarComponent } from './components/pokemon-search-bar/pokemon-search-bar.component';
import { PokemonLoadingComponent } from './components/pokemon-loading/pokemon-loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokemonAttackDetailsModalComponent } from './components/pokemon-attack-details-modal/pokemon-attack-details-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon-details/:id', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FontAwesomeModule,
    ModalModule
  ],
  declarations: [
    PokemonMaintenanceComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonSearchBarComponent,
    PokemonLoadingComponent,
    PokemonAttackDetailsModalComponent
  ],
  exports: [RouterModule]
})
export class PokemonMaintenanceModule { }
