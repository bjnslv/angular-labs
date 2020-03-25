import { Component } from '@angular/core';

import { pokemons } from '../pokemons';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  pokemons = pokemons;

  share() {
    window.alert('The pokemon has been shared!');
  }

}