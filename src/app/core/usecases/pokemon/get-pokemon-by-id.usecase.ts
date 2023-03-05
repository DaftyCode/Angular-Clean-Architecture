import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UseCase } from '@base/use-case';
import { PokemonEntity } from '@data/pokemon-repository/entities/pokemon-entity';
import { PokemonService } from '@data/pokemon-repository/services/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonsByIdUsecase implements UseCase<number[], PokemonEntity[]> {
  constructor(private pokemonService: PokemonService) {}

  execute(params: number[]): Observable<PokemonEntity[]> {
    return this.pokemonService.getPokemonsById(params);
  }
}
