import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PokemonEntity } from '@data/pokemon-repository/entities/pokemon-entity';

@Component({
  selector: 'app-pokemon-solution',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pokemon-solution.component.html',
  styleUrls: ['./pokemon-solution.component.scss'],
})
export class PokemonSolutionComponent {
  @Input() isCorrect = false;
  @Input() isAnswered = false;
  @Input() pokemon!: PokemonEntity | null;
  @Output() isNewGame = new EventEmitter<boolean>(false);

  newGame() {
    this.isNewGame.emit(true);
  }
}
