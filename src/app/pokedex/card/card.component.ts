import { Input, Component, OnInit } from '@angular/core';
import { Pokemon } from '../types/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  isDamaged(pokemon) {
    return pokemon.damage > 50;
  }
}