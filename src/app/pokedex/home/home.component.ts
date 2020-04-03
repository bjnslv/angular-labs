import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../../pokedb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  view: string = "gallery";
  pokemons = POKEMONS;

  constructor() { }

  ngOnInit(): void {
  }

  toggleView(viewType: string): void {
    this.view = viewType;
  }

}