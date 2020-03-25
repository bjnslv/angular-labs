  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';


@NgModule({
  declarations: [PokemonsComponent, PokemonItemComponent],
  imports: [
    CommonModule
  ],
  exports: [PokemonsComponent]
})
export class PokemonModule { }