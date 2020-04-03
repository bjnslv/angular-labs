import { Input, Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../types/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
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
}