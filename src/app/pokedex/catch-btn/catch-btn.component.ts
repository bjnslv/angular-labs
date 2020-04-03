import { Input, Component, OnInit } from '@angular/core';
import { Pokemon } from '../types/types';

@Component({
  selector: 'app-catch-btn',
  templateUrl: './catch-btn.component.html',
  styleUrls: ['./catch-btn.component.scss']
})
export class CatchBtnComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  catch(pokemon) {
    pokemon.isCaught = !pokemon.isCaught;
    const status: string = pokemon.isCaught ? "caught" : "released";
  }

  getStatus(pokemon) {
    return pokemon.isCaught ? "Release" : "Catch";
  }
}