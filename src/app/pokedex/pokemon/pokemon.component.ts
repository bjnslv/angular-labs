import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../types/types';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() catchPoke = new EventEmitter<Pokemon>();

  onCatchBtnClick() {
    this.catchPoke.emit();
  }

  getStatus(pokemon: Pokemon): string {
    return pokemon.isCaught ? "Release" : "Catch";
  }

  formatCatchDate(date) {
    if (date) {
      const catchData = new Date(date);
      let day = "0" + catchData.getDate();
      let month = "0" + (catchData.getMonth() + 1);
      let year = catchData.getFullYear();

      return `${day.substr(-2)}.${month.substr(-2)}.${year}`;
    }
  }
}