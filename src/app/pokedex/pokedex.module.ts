import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    CardComponent,
    PokemonComponent,
    NavComponent,
    HomeComponent,
    CollectionComponent
  ],
  imports: [CommonModule]
})
export class PokedexModule { }