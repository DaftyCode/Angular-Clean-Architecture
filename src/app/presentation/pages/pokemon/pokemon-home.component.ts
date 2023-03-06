import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';

import { PokemonImageComponent } from './components/pokemon-image/pokemon-image.component';
import { PokemonOptionsComponent } from './components/pokemon-options/pokemon-options.component';
import { PokemonSolutionComponent } from './components/pokemon-solution/pokemon-solution.component';

import { GetPokemonsByIdUsecase } from '@core/usecases/pokemon/get-pokemon-by-id.usecase';
import { PokemonEntity } from '@data/pokemon-repository/entities/pokemon-entity';
import { SubscriptionsBaseComponent } from '@presentation/components/subscriptions-base/subscriptions-base.component';
import { generateRandomNumbers } from '@utils/generate-random-numbers-utils';

@Component({
  standalone: true,
  selector: 'app-pokemon-home',
  imports: [NgIf, PokemonOptionsComponent, PokemonImageComponent, PokemonSolutionComponent],
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss'],
})
export class PokemonHomeComponent extends SubscriptionsBaseComponent implements OnInit {
  pokemonIds: number[] = [];
  pokemonCorrect!: PokemonEntity | null;
  pokemonList!: PokemonEntity[];
  isCorrect = false;
  isAnswered = false;

  constructor(private getPokemonsById: GetPokemonsByIdUsecase) {
    super();
  }

  ngOnInit(): void {
    this.pokemonIds = generateRandomNumbers(4);
    this.getPokemons();
  }

  getPokemons() {
    this.getPokemonsById
      .execute(this.pokemonIds)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        this.pokemonList = data;
        this.findCorrectPokemon();
      });
  }

  findCorrectPokemon() {
    const tempCorrectId = Math.floor(Math.random() * 4);
    this.pokemonCorrect = this.pokemonList[tempCorrectId];
  }

  userResponse(pokemon: PokemonEntity) {
    if (this.pokemonCorrect?.url === pokemon.url) {
      this.isCorrect = true;
    }
    this.isAnswered = true;
  }

  newGame(event: boolean): void {
    if (event) {
      this.pokemonIds = [];
      this.pokemonCorrect = null;
      this.pokemonList = [];
      this.isCorrect = false;
      this.isAnswered = false;
      this.pokemonIds = generateRandomNumbers(4);
      this.getPokemons();
    }
  }
}
