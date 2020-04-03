import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CollectionComponent } from './collection/collection.component';
import { CatchBtnComponent } from './catch-btn/catch-btn.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardComponent,
    PokemonComponent,
    NavComponent,
    HomeComponent,
    CollectionComponent,
    CatchBtnComponent
  ],
  imports: [CommonModule,
    MatCardModule, 
    MatButtonModule, 
    FlexLayoutModule, 
    MatListModule, 
    MatIconModule],
  exports: [CardComponent,
    PokemonComponent,
    HomeComponent,
    NavComponent,
    CollectionComponent,
    CatchBtnComponent]
})
export class PokedexModule { }