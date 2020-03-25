import { Component } from '@angular/core';

import { pokemons } from './pokemons';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class HomeComponent {
  pokemons = pokemons;

  share() {
    window.alert('The pokemon has been shared!');
  }

}