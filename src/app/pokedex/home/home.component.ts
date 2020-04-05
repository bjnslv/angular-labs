import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../../pokedb';
import { Pokemon } from '../types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  view: string = "gallery";
  pokemons = POKEMONS;
  pokemon: Pokemon = POKEMONS[0];


  constructor() { }

  ngOnInit(): void {
  }

  toggleView(viewType: string): void {
    this.view = viewType;
  }
  pokemonPageCatchOnClick(pokemon: Pokemon): void {
    pokemon.isCaught = !pokemon.isCaught;
    const status: string = pokemon.isCaught ? "caught" : "released";
    console.log(`Pokemon ${pokemon.name} was ${status}`);
  }
}