import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonMaintenanceComponent } from './pokemon-maintenance.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PokemonListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    PokemonMaintenanceComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
  ],
  exports: [RouterModule]
})
export class PokemonMaintenanceModule { }
