import { NgIf, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PokemonEntity } from '@data/pokemon-repository/entities/pokemon-entity';
import { TRACK_BY_ID_FUNCTION } from '@helpers/track-by-helper';

@Component({
  selector: 'app-pokemon-options',
  templateUrl: './pokemon-options.component.html',
  styleUrls: ['./pokemon-options.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor],
})
export class PokemonOptionsComponent {
  @Input() pokemonOptions!: PokemonEntity[];
  @Output() sendResponse = new EventEmitter<PokemonEntity>();
  userAnswered = false;
  trackByFunc = TRACK_BY_ID_FUNCTION;

  userResponse(pokemon: PokemonEntity) {
    this.sendResponse.emit(pokemon);
    this.userAnswered = true;
  }
}
