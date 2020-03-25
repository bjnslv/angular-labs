import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokedex/pokemon.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PokemonComponent },
    ])
  ],
  declarations: [
    AppComponent,
    PokemonComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }